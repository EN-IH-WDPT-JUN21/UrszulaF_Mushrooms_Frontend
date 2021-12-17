import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MushroomService {

  private baseUrl = 'http://localhost:8000/api/mushrooms';


  constructor(private http: HttpClient) { }


  getMushroom(mushroomName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${mushroomName}`);
  }

  getMushroomById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createMushroom(mushroom: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, mushroom);
  }

  updateMushroom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteMushroom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getMushroomsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  searchMushrooms(mushroomName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/containing/${mushroomName}`);
  }

}
