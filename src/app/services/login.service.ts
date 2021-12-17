import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8000"

  constructor(private http: HttpClient) { }

  generateToken(credentials: any) {
    return this.http.post(`${this.url}/token`, credentials)
  }


  //caliing server to generate token 

  loginUser(token: string, username: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    return true
  }

  isLoggedIn() {
    {
      let token = localStorage.getItem("token");
      if (token == undefined || token == "" || token == null) {
        return false;

      } else {
        return true;
      }
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    return true;
  }


  gettoken() {
    return localStorage.getItem("token");

  }


  isAdmin() {
    if (localStorage.getItem('role') == 'ADMIN') {
      return true;

    } else {
      return false;
    }

  }

  isPremium() {
    if (localStorage.getItem('role') == 'PREMIUM') {
      return true;

    } else {
      return false;
    }

  }
}
