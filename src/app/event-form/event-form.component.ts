import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventNew } from '../models/event-new.model';
import { CustomValidator } from '../validators/custom.validator';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';



@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  event: EventNew;

  eventTypeNames: string[];

  eventForm: FormGroup;
  eventName: FormControl;
  eventTypeName: FormControl;
  whenEvent: FormControl;
  duration: FormControl;
  whereEvent: FormControl;
  contactPerson: FormControl;
  description: FormControl;

  constructor(        private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 

    this.eventTypeNames=['MUSHROOM_PICKING','FOREST_WALK','OTHER'];
    this.eventName= new FormControl('',[Validators.required, Validators.minLength(3), CustomValidator.nameValidator]);
    this.eventTypeName = new FormControl('', [ Validators.required]);
    this.whenEvent = new FormControl('', [ Validators.required, CustomValidator.dateValidator]);
    this.duration = new FormControl('', [ Validators.required, Validators.min(1)]);
    this.whereEvent = new FormControl('', [ Validators.required, Validators.minLength(3)]);
    this.contactPerson = new FormControl('', [ Validators.required, Validators.minLength(3), CustomValidator.nameValidator]);
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

    this.event= new EventNew("","",new Date(),0, "", "","");
  }

  ngOnInit(): void {
  }



  onSubmit(): void{
    console.log('Created User');
    console.log(this.eventForm.value);

// const dateISO=new Date();

// const dateISO = moment(this.whenEvent.value).toISOString().slice(0, -1);
// console.log(dateISO);
    console.log(this.eventName.value);
    this.event=new EventNew(this.eventName.value, this.eventTypeName.value,this.whenEvent.value, this.duration.value, this.whereEvent.value, this.contactPerson.value, this.description.value);
    console.log('testpayload', this.event);
    this.eventService
    .createEvent(this.event).subscribe(data => {
      console.log(data)
      this.event = new EventNew(this.eventName.value, this.eventTypeName.value,this.whenEvent.value, this.duration.value, this.whereEvent.value, this.contactPerson.value, this.description.value);
    },
    error => console.log(error));
   }



}
