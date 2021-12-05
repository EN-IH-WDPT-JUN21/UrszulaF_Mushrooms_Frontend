import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-user-update-email',
  templateUrl: './user-update-email.component.html',
  styleUrls: ['./user-update-email.component.css']
})
export class UserUpdateEmailComponent implements OnInit {

  user: User;
  username!: string | any;



  userForm: FormGroup;
  email: FormControl;

  submitted = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.email = new FormControl('', [Validators.required, Validators.email]);


    this.userForm = new FormGroup({
      email: this.email
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
        // this.goToProfile();
      }, error => console.log(error));
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

}
