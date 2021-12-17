import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-update-photo',
  templateUrl: './user-update-photo.component.html',
  styleUrls: ['./user-update-photo.component.css']
})
export class UserUpdatePhotoComponent implements OnInit {

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string = "";
  imageName: any;

  user: User;
  username!: string | any;


  userForm: FormGroup;

  photoURL: FormControl;

  submitted = false;

  constructor(private httpClient: HttpClient,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.photoURL = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);


    this.userForm = new FormGroup({

      photoURL: this.photoURL

    })


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
        this.userForm.patchValue({
          photoURL: this.user.photoURL
        });
      }, error => console.log(error));
  }

  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8300/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        console.log(response);
        if (response.status === 201) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8300/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
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


