import { UserItem } from './../models/user-item.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  username!: string | any;
  user: UserItem;

  @ViewChild('form')
  form!: NgForm;

  submitted = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.username="";
    this.user= new UserItem(0,"","","", "", "","");
  }

  ngOnInit(): void {

    this.username = localStorage.getItem("username");
    
    this.userService.getUser(this.username)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }


  onSubmit(): void {
    this.submitted = false;
    console.log(this.form.value);
    this.updateUser();

  }

  updateUser() {
    this.userService.updateUser(this.username, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new UserItem(this.user.id, this.user.avatarURL, this.user.username, this.user.email, this.user.password, this.user.bio, this.user.role);
        this.goToProfile();
      }, error => console.log(error));
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

}
