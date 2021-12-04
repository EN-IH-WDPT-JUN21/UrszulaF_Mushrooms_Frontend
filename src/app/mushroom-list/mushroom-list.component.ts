import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mushroom } from '../models/mushroom.model';
import { MushroomService } from '../services/mushroom.service';

@Component({
  selector: 'app-mushroom-list',
  templateUrl: './mushroom-list.component.html',
  styleUrls: ['./mushroom-list.component.css']
})
export class MushroomListComponent implements OnInit {

  id: number;
  mushroomName: string;
  mushroom: Mushroom;
  selectedMushroom: Mushroom;

  mushrooms: Array<Mushroom>;

  constructor(private mushroomService: MushroomService,
    private router: Router) {
      this.id=0;
      this.mushroomName="";
      this.mushroom= new Mushroom(0,"","","", false, "", "","","","","","","","","","","","","");
      this.selectedMushroom= new Mushroom(0,"","","", false, "", "","","","","","","","","","","","","");
      this.mushrooms = new Array();
    }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.mushroomService.getMushroomsList().subscribe(apiResponse => {
      this.mushrooms = apiResponse;
    })
;
  }

  onSelect(mushroom: Mushroom):void{
    this.selectedMushroom=mushroom;
    this.mushroomDetails(this.selectedMushroom.mushroomName)
    }




  deleteMushroom(id: number) {
    this.mushroomService.deleteMushroom(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          location.reload();
        },
        error => console.log(error));

  }

  mushroomDetails(mushroomName: string){
    this.router.navigate(['mushroom-details', mushroomName]);
  }

  onSubmit(): void {

    this.searchMushrooms();

  }

  searchMushrooms() {
    this.mushroomService.searchMushrooms(this.mushroomName).subscribe(apiResponse => {
      this.mushrooms = apiResponse;
    },
    error => {
      console.log(error);
      window.alert("No such mushroom.Try again!")
    });
  }

}
