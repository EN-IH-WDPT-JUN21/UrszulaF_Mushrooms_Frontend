import { UserItem } from './../models/user-item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { PhotoService } from '../services/photo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: number;
  username!: string | any;
  user: UserItem;
  public isAdmin = false;
  retrieveResonse: any;
  retrievedImage: any;
  base64Data: any;

  clicked = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private loginService: LoginService, private photoService: PhotoService, private httpClient: HttpClient) {
    this.id = 0;
    this.username = "";
    this.user = new UserItem(0, "", "", "", "", "", "")
  }

  ngOnInit(): void {

    this.username = localStorage.getItem("username");

    this.userService.getUser(this.username)
      .subscribe(data => {
        // console.log(data)
        this.user = data;
        localStorage.setItem(
          'role',
          (this.user.role)
        );
        this.isAdmin = this.loginService.isAdmin();
        this.getImage();
      }, error => console.log(error));



    if (this.isAdmin) {
      this.goToAdmin();
    }


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

  updatePhoto() {
    this.router.navigate(['user-update-photo'])
  }

  home() {
    this.router.navigate(['/'])
  }

  goToAdmin() {
    this.router.navigate(['user-list'])
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8300/image/get/' + this.user.photoURL)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

}
