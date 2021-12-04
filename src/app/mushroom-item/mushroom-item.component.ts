import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mushroom } from '../models/mushroom.model';
import { MushroomService } from '../services/mushroom.service';

@Component({
  selector: 'app-mushroom-item',
  templateUrl: './mushroom-item.component.html',
  styleUrls: ['./mushroom-item.component.css']
})
export class MushroomItemComponent implements OnInit {
  id: number;
  mushroomName: string;
  mushroom: Mushroom;



  clicked = false;

  constructor(private route: ActivatedRoute,    private mushroomService: MushroomService, private router: Router) { 
    this.id=0;
    this.mushroomName="";
    this.mushroom= new Mushroom(0,"","","", false, "", "","","","","","","","","","","","","")
    }

  ngOnInit(): void {

    this.mushroomName = this.route.snapshot.params['mushroomName'];
    
    this.mushroomService.getMushroom(this.mushroomName)
      .subscribe(data => {
        console.log(data)
        this.mushroom = data;
      }, error => console.log(error));
  }

  deleteMushroom(id: number) {
    this.mushroomService.deleteMushroom(id)
      .subscribe(
        data => {
          console.log(data);
          location.reload();
        },
        error => console.log(error));

  }

  mushroomList(): void{
    this.router.navigate(['mushroom-list']);
  }

}
