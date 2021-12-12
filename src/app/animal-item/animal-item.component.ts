import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../models/animal.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css']
})
export class AnimalItemComponent implements OnInit {
  id: number;
  animalName: string;
  animal: Animal;



  clicked = false;

  constructor(private route: ActivatedRoute,    private animalService: AnimalService, private router: Router) { 
    this.id=0;
    this.animalName="";
    this.animal= new Animal(0,"","","", "", "","","");
    }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    
    this.animalService.getAnimalById(this.id)
      .subscribe(data => {
        console.log(data)
        this.animal = data;
      }, error => console.log(error));
  }

  deleteAnimal(id: number) {
    this.animalService.deleteAnimal(id)
      .subscribe(
        data => {
          console.log(data);
          location.reload();
        },
        error => console.log(error));

  }

  animalList(): void{
    this.router.navigate(['animal-list']);
  }

}
