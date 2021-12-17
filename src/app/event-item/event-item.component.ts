import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventItem } from '../models/event-item.model';
import { EventService } from '../services/event.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  id: number;
  eventName: string;
  event: EventItem;
  txt: String = "";
  public isAdmin = false;
  public isPremium = false;

  clicked = false;

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router, private loginService: LoginService) {
    this.id = 0;
    this.eventName = "";
    this.event = new EventItem(0, "", "", new Date(), 0, "", "", "");
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.eventService.getEventById(this.id)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error));

    this.isAdmin = this.loginService.isAdmin();
    this.isPremium = this.loginService.isPremium();
  }






  deleteEvent(id: number) {

    if (confirm("Are you sure you want to delete this event?") == true) {
      this.txt = "You pressed OK!";
      this.eventService.deleteEvent(id)
        .subscribe(
          data => {
            console.log(data);
            location.reload();
          },
          error => console.log(error));
      this.eventList();
    } else {
      this.txt = "You canceled!";
    }


  }

  eventList(): void {
    this.router.navigate(['event-list']);
  }

  updateEvent(id: number) {
    this.router.navigate(['event-update', id]);
  }

}
