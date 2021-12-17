import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string = "";
  imageName: any;

  private baseUrl = 'http://localhost:8300/image';

  constructor(private http: HttpClient) { }




  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage(imageName: string) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get('http://localhost:8300/image/get/' + imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

}
