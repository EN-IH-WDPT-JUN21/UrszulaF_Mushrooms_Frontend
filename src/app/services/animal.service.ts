import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl = 'http://localhost:8400/api/animals';


  constructor(private http: HttpClient) { }


  getAnimal(animalName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${animalName}`);
  }

  getAnimalById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createAnimal(animal: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, animal);
  }

  updateAnimal(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteAnimal(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getAnimalsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  searchAnimals(animalName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/containing/${animalName}`);
  }
}
