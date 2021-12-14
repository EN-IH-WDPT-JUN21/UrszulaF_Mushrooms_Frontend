import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-user-update-role',
  templateUrl: './user-update-role.component.html',
  styleUrls: ['./user-update-role.component.css']
})
export class UserUpdateRoleComponent implements OnInit {

  user: User;
  username!: string | any;

  roles: string[];

  userForm: FormGroup;
  role: FormControl;

  submitted = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.roles=['USER','PREMIUM'];
    this.role = new FormControl('', [Validators.required]);

    this.userForm = new FormGroup({
      role: this.role
    })


    this.username="";
    this.user= new User();
  }

  ngOnInit(): void {
    this.user= new User();
    this.username = localStorage.getItem("username");
    
    this.userService.getUser(this.username)
      .subscribe(data => {
        console.log(data)
        this.user = data;
        this.userForm.patchValue({role: this.user.role
        });
      }, error => console.log(error));
  }


  onSubmit(): void {
    this.submitted = false;
     console.log(this.user);
     console.log(this.userForm.value);
    this.updateUser();

  }

  updateUser() {
    this.userService.updateUser(this.username, this.userForm.value)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.goToProfile();
      }, error => console.log(error));
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

}
