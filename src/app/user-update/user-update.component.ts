import { UserItem } from './../models/user-item.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User;
  username!: string | any;

  roles: string[];

  userForm: FormGroup;
  email: FormControl;
  password: FormControl;
  passwordConfirmation: FormControl;
  bio: FormControl;
  role: FormControl;

  submitted = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.roles=['USER','PREMIUM'];
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
    this.passwordConfirmation = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
    this.bio = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]);
    this.role = new FormControl('', [Validators.required]);

    this.userForm = new FormGroup({
      email: this.email,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
      bio: this.bio,
      role: this.role,
    }, [CustomValidator.checkPassword])


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
        this.goToProfile();
      }, error => console.log(error));
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

}
