import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../models/animal.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {


  id: number;
  animalName: string;
  animal: Animal;
  selectedAnimal: Animal;

  animals: Array<Animal>;

  constructor(private animalService: AnimalService,
    private router: Router) {
      this.id=0;
      this.animalName="";
      this.animal= new Animal(0,"","","", "", "","","");
      this.selectedAnimal= new Animal(0,"","","", "", "","","");
      this.animals = new Array();
    }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.animalService.getAnimalsList().subscribe(apiResponse => {
      this.animals = apiResponse;
    })
;
  }

  onSelect(animal: Animal):void{
    this.selectedAnimal=animal;
    this.animalDetails(this.selectedAnimal.id)
    }




  deleteAnimal(id: number) {
    this.animalService.deleteAnimal(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          location.reload();
        },
        error => console.log(error));

  }

  animalDetails(id: number){
    this.router.navigate(['animal-details', id]);
  }

  onSubmit(): void {

    this.searchAnimals();

  }

  searchAnimals() {
    this.animalService.searchAnimals(this.animalName).subscribe(apiResponse => {
      this.animals = apiResponse;
    },
    error => {
      console.log(error);
      window.alert("No such animal.Try again!")
    });
  }

}
