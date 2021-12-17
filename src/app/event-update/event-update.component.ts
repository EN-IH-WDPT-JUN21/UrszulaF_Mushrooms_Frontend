import { EventItem } from './../models/event-item.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventNew } from '../models/event-new.model';

import { EventService } from '../services/event.service';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  event: EventNew;
  selectedEvent: EventItem;
  id: number;
  eventName0 = "";

  eventTypeNames: string[];

  eventForm: FormGroup;
  eventName: FormControl;
  eventTypeName: FormControl;
  whenEvent: FormControl;
  duration: FormControl;
  whereEvent: FormControl;
  contactPerson: FormControl;
  description: FormControl;

  constructor(private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.eventTypeNames = ['MUSHROOM_PICKING', 'FOREST_WALK', 'OTHER'];
    this.eventName = new FormControl('', [Validators.required, Validators.minLength(3), CustomValidator.nameValidator]);
    this.eventTypeName = new FormControl('', [Validators.required]);
    this.whenEvent = new FormControl('', [Validators.required, CustomValidator.dateValidator]);
    this.duration = new FormControl('', [Validators.required, Validators.min(1)]);
    this.whereEvent = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.contactPerson = new FormControl('', [Validators.required, Validators.minLength(3), CustomValidator.nameValidator]);
    this.description = new FormControl('');

    this.eventForm = new FormGroup({
      eventName: this.eventName,
      eventTypeName: this.eventTypeName,
      whenEvent: this.whenEvent,
      duration: this.duration,
      whereEvent: this.whereEvent,
      contactPerson: this.contactPerson,
      description: this.description
    })

    this.event = new EventNew("", "", new Date(), 0, "", "", "");
    this.selectedEvent = new EventItem(0, "", "", new Date(), 0, "", "", "");
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.eventService.getEventById(this.id)
      .subscribe(data => {
        console.log(data)
        this.selectedEvent = data;
        this.eventForm.patchValue({
          eventName: this.selectedEvent.eventName,
          eventTypeName: this.selectedEvent.eventType,
          whenEvent: this.selectedEvent.whenEvent,
          duration: this.selectedEvent.duration,
          whereEvent: this.selectedEvent.whereEvent,
          contactPerson: this.selectedEvent.contactPerson,
          description: this.selectedEvent.description
        });
      }, error => console.log(error));
    // this.eventForm.get('eventName').setValue(this.selectedEvent.eventName);
    // this.eventForm.patchValue({eventName: this.selectedEvent.eventName});
  }



  onSubmit(): void {
    console.log('Created Event');
    console.log(this.eventForm.value);

    // const dateISO=new Date();

    // const dateISO = moment(this.whenEvent.value).toISOString().slice(0, -1);
    // console.log(dateISO);
    console.log(this.eventName.value);
    this.event = new EventNew(this.eventName.value, this.eventTypeName.value, this.whenEvent.value, this.duration.value, this.whereEvent.value, this.contactPerson.value, this.description.value);
    console.log('testpayload', this.event);
    this.updateEvent();
    // this.eventService
    // .updateEvent(this.id,this.event).subscribe(data => {
    //   console.log(data)
    //   this.event = new EventNew(this.eventName.value, this.eventTypeName.value,this.whenEvent.value, this.duration.value, this.whereEvent.value, this.contactPerson.value, this.description.value);
    //   window.location.href="/event-list";
    // },
    // error => console.log(error));
  }

  updateEvent() {
    this.eventService.updateEvent(this.id, this.eventForm.value)
      .subscribe(data => {
        console.log(data);
        this.event = new EventNew(this.eventName.value, this.eventTypeName.value, this.whenEvent.value, this.duration.value, this.whereEvent.value, this.contactPerson.value, this.description.value);
        this.eventDetails(this.id);
      }, error => console.log(error));
  }


  eventDetails(id: number) {
    this.router.navigate(['event-details', id]);
  }

}
