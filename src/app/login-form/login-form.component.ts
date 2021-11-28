import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  submitted = false;
  wrong = false;
  credentials={
    username:"",
    password:""
  }

  constructor(private loginService:LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Form Submitted");

    if(this.credentials.username != "" && this.credentials.password != ""){
      console.log("Submit the form");

      this.loginService.generateToken(this.credentials).subscribe(
        (response:any) =>{
          //success
          console.log(response.token);
          this.loginService.loginUser(response.token, this.credentials.username);
          this.wrong=false;
          this.submitted=true;
          window.location.href="/profile";
          
        },
        //error part
        error=>{
          this.submitted=false;
          this.wrong=true;
          console.log(error);
          window.alert("Wrong credentials.Try again!")
        }
      ) 
      //generate token


    }
    else{
      this.submitted=false;
      this.wrong=true;
      console.log("don't submit");
      window.alert("Wrong credentials.Try again!")
    }
  }
/*  @ViewChild('form')
  form!: NgForm;

  submitted = false;
  wrong = false;
  isLoggedIn = false;

  user: User;


  users!: Observable<User[]>;



  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {
    this.user = {
      avatarURL: '',
      username: '',
      email: '',
      password: '',
      bio:'',
      role: ''

    }

  }

  ngOnInit(): void {
    this.user = new User();
    this.isLogged();
    this.reloadData();
  }

  reloadData() {
    this.users=this.userService.getUsersList();
  }


  getUser(username:String): void {
    this.submitted = false;
    this.userService.getUser(this.form.value.username)
    .subscribe(data => {
      if(data == null){
        this.submitted=false;
          this.wrong=true;
      }
      this.user = data;

      if(this.form.value.password  === this.user.password){
        this.wrong=false;
        this.submitted=true;
        localStorage.setItem(
          'username',
          (this.user.username)
        );
        localStorage.setItem(
          'role',
          (this.user.role)
        );
        this.router.navigate(['/']);

      }else{
        this.submitted=false;
        this.wrong=true;
        this.form.value.username='';
        this.form.value.password='';
        this.user = new User();
      }
    }, error => console.log(error));


  }

  onLogin(): void {
    this.submitted=false;
    this.wrong=true;
    console.log(this.form.value);
    console.log(this.form.value.username);

    this.getUser(this.form.value.username); 
    



  }

  isLogged(): boolean {
    if (localStorage.getItem('username')) {
      return true;

    }else{
      return false;
    }

  }*/

  logout(): void {
    this.router.navigate(['/logout'])
  }

  sendToRegister(): void {
    this.router.navigate(['/register']);
  }




}
