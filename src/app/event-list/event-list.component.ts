import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventItem } from '../models/event-item.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  id: number;
  eventType: string;
  event: EventItem;
  selectedEvent: EventItem;
  today: Date;

  events: Array<EventItem>;

  constructor(private eventService: EventService,
    private router: Router) {
    this.id = 0;
    this.eventType = "";
    this.event = new EventItem(0, "", "", new Date(), 0, "", "", "");
    this.selectedEvent = new EventItem(0, "", "", new Date(), 0, "", "", "");
    this.events = new Array();
    this.today = new Date();
  }

  ngOnInit() {
    this.reloadData();
    this.today = new Date();
  }

  reloadData() {
    this.eventService.getEventsList().subscribe(apiResponse => {
      this.events = apiResponse;
    })
      ;
  }

  onSelect(event: EventItem): void {
    this.selectedEvent = event;
    this.eventDetails(this.selectedEvent.id)
  }


  eventDetails(id: number) {
    this.router.navigate(['event-details', id]);
  }

  onSubmit(): void {

    this.searchEvents();

  }

  searchEvents() {
    this.eventService.searchEvents(this.eventType).subscribe(apiResponse => {
      this.events = apiResponse;
    },
      error => {
        console.log(error);
        window.alert("No such event.Try again!")
      });
  }

  eventAdd() {
    this.router.navigate(['event-form']);
  }

}
