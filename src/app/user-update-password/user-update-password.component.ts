import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-user-update-password',
  templateUrl: './user-update-password.component.html',
  styleUrls: ['./user-update-password.component.css']
})
export class UserUpdatePasswordComponent implements OnInit {

  user: User;
  username!: string | any;


  userForm: FormGroup;

  password: FormControl;
  passwordConfirmation: FormControl;


  submitted = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
    this.passwordConfirmation = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);


    this.userForm = new FormGroup({

      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    }, [CustomValidator.checkPassword])


    this.username = "";
    this.user = new User();
  }

  ngOnInit(): void {
    this.user = new User();
    this.username = localStorage.getItem("username");

    this.userService.getUser(this.username)
      .subscribe(data => {
        // console.log(data)
        this.user = data;
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
    this.router.navigate(['/profile']);
  }

}
