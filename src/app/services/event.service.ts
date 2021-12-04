import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8200/api/events';

  constructor(private http: HttpClient) { }


  getEvent(eventName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${eventName}`);
  }

  createEvent(event: Object): Observable<Object> {
    console.log('testpayload', event);
    return this.http.post(`${this.baseUrl}/new`, event);
  }

  updateEvent(eventName: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${eventName}`, value);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getEventsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  searchEvents(eventType: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/type/${eventType}`);
  }
}
