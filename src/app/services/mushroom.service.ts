import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MushroomService {

  private baseUrl = 'http://localhost:8100/api/mushrooms';

  constructor(private http: HttpClient) { }


  getMushroom(mushroomName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${mushroomName}`);
  }

  createMushroom(mushroom: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, mushroom);
  }

  updateMushroom(mushroomName: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${mushroomName}`, value);
  }

  deleteMushroom(mushroomName: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${mushroomName}`, { responseType: 'text' });
  }

  getMushroomsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
