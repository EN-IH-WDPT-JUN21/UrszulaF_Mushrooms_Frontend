import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8000/api/users-auth';

  constructor(private http: HttpClient) { }


  getUser(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, user);
  }

  updateUser(username: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${username}`, value);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${username}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${username}`);
  }

  searchUsers(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/containing/${username}`);
  }
  
}
