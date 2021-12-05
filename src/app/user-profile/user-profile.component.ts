import { UserItem } from './../models/user-item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: number;
  username!: string | any;
  user: UserItem;



  clicked = false;

  constructor(private route: ActivatedRoute,    private userService: UserService, private router: Router) { 
    this.id=0;
    this.username="";
    this.user= new UserItem(0,"","","", "", "","")
    }

  ngOnInit(): void {

    this.username = localStorage.getItem("username");
    
    this.userService.getUser(this.username)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  updateAll() {
    this.router.navigate(['user-update'])
  }


  updateEmail() {
    this.router.navigate(['user-update-email'])
  }

  updatePassword() {
    this.router.navigate(['user-update-password'])
  }

  updateBio() {
    this.router.navigate(['user-update-bio'])
  }

  updateRole() {
    this.router.navigate(['user-update-role'])
  }

  home() {
    this.router.navigate(['/'])
  }

}
