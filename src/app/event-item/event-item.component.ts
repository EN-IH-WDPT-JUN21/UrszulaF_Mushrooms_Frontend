import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventItem } from '../models/event-item.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  id: number;
  eventName: string;
  event: EventItem;



  clicked = false;

  constructor(private route: ActivatedRoute,    private eventService: EventService, private router: Router) { 
    this.id=0;
    this.eventName="";
    this.event= new EventItem(0,"","",new Date(),0, "", "","");
    }

  ngOnInit(): void {

    this.eventName = this.route.snapshot.params['eventName'];
    
    this.eventService.getEvent(this.eventName)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error));
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          location.reload();
        },
        error => console.log(error));

  }

  eventList(): void{
    this.router.navigate(['event-list']);
  }

}
