import { UserItem } from './../models/user-item.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  id: number;
  userName: string;
  user: UserItem;
  selectedUser: UserItem;
  txt:String="";

  users: Array<UserItem>;

  constructor(private userService: UserService,
    private router: Router) {
      this.id=0;
      this.userName="";
      this.user= new UserItem(0,"","","", "", "","")
      this.selectedUser= new UserItem(0,"","","", "", "","")
      this.users = new Array();
    }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUsersList().subscribe(apiResponse => {
      this.users = apiResponse;
    })
;
  }


  deleteUser(username: string) {


if (confirm("Are you sure you want to delete this user?") == true) {
  this.txt = "You pressed OK!";
      this.userService.deleteUser(username)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          location.reload();
        },
        error => console.log(error));
} else {
  this.txt = "You canceled!";
}


  }


  updateUser(username: string){
    this.router.navigate(['user-update-admin', username]);
  }

  // onSubmit(): void {

  //   this.searchUsers();

  // }

  // searchUsers() {
  //   this.userService.searchUsers(this.userName).subscribe(apiResponse => {
  //     this.users = apiResponse;
  //   },
  //   error => {
  //     console.log(error);
  //     window.alert("No such user.Try again!")
  //   });
  // }

}
