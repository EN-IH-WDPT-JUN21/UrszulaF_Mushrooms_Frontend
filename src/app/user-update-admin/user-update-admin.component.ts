import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-user-update-admin',
  templateUrl: './user-update-admin.component.html',
  styleUrls: ['./user-update-admin.component.css']
})
export class UserUpdateAdminComponent implements OnInit {

  user: User;
  username!: string | any;

  roles: string[];

  userForm: FormGroup;
  email: FormControl;
  role: FormControl;

  submitted = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.roles = ['USER', 'PREMIUM', 'ADMIN'];
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.role = new FormControl('', [Validators.required]);

    this.userForm = new FormGroup({
      email: this.email,
      role: this.role,
    })


    this.username = "";
    this.user = new User();
  }

  ngOnInit(): void {
    this.user = new User();
    this.username = this.activatedRoute.snapshot.params['username'];
    this.userService.getUser(this.username)
      .subscribe(data => {
        // console.log(data)
        this.user = data;
        this.userForm.patchValue({
          email: this.user.email,
          role: this.user.role
        });
      }, error => console.log(error));
  }


  onSubmit(): void {
    this.submitted = false;
    // console.log(this.user);
    console.log(this.userForm.value);
    this.updateUser();

  }

  updateUser() {
    this.userService.updateUser(this.username, this.userForm.value)
      .subscribe(data => {
        // console.log(data);
        this.user = new User();
        this.goToProfile();
      }, error => console.log(error));
  }

  goToProfile(): void {
    this.router.navigate(['/user-list']);
  }

}
