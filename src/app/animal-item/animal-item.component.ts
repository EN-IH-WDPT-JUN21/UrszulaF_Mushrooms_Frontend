import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../models/animal.model';
import { AnimalService } from '../services/animal.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css']
})
export class AnimalItemComponent implements OnInit {
  id: number;
  animalName: string;
  animal: Animal;
  txt: String = "";
  public isAdmin = false;
  public isPremium = false;


  clicked = false;

  constructor(private route: ActivatedRoute, private animalService: AnimalService, private router: Router, private loginService: LoginService) {
    this.id = 0;
    this.animalName = "";
    this.animal = new Animal(0, "", "", "", "", "", "", "");
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.animalService.getAnimalById(this.id)
      .subscribe(data => {
        console.log(data)
        this.animal = data;
      }, error => console.log(error));
    this.isAdmin = this.loginService.isAdmin();
    this.isPremium = this.loginService.isPremium();
  }

  deleteAnimal(id: number) {
    if (confirm("Are you sure you want to delete this animal?") == true) {
      this.txt = "You pressed OK!";
      this.animalService.deleteAnimal(id)
        .subscribe(
          data => {
            console.log(data);
            location.reload();
          },
          error => console.log(error));
      this.animalList();
    } else {
      this.txt = "You canceled!";
    }
  }

  animalList(): void {
    this.router.navigate(['animal-list']);
  }

  updateAnimal(id: number) {
    this.router.navigate(['animal-update', id]);
  }

}
