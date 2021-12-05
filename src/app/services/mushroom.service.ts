import { HttpClient, HttpParams } from '@angular/common/http';
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

  getMushroomById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createMushroom(mushroom: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, mushroom);
  }

  updateMushroom(mushroomName: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${mushroomName}`, value);
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

  // searchAnimals(startAge: number, endAge: number, type:string): Observable<any> {
  //   let httpParams = new HttpParams();
  //   if (startAge) httpParams = httpParams.append('startAge', startAge);
  //   // if (endAge) httpParams = httpParams.append('endAge', endAge);
  //   // if (type) httpParams = httpParams.append('type', type);

  //   const httpOptions = {
  //     params: httpParams
  //   };
  //   return this.http.get<any>(this.baseUrl + '/adopt', httpOptions);
  // }
}
