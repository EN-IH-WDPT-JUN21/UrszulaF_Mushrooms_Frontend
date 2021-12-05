import { Mushroom } from './../models/mushroom.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MushroomService } from '../services/mushroom.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quizz-form',
  templateUrl: './quizz-form.component.html',
  styleUrls: ['./quizz-form.component.css']
})
export class QuizzFormComponent implements OnInit {

  id: number;
  mushroomName: string;
  mushroom: Mushroom;



  mushrooms: Array<Mushroom>;

  quizzForm: FormGroup;

  isEdible: FormControl;


  constructor(        private route: ActivatedRoute,    private mushroomService: MushroomService, private router: Router) { 

    
    this.isEdible = new FormControl('', [ Validators.required]);


    this.quizzForm = new FormGroup({
      isEdible: this.isEdible
    })

    this.id=1;
    this.mushroomName="";
    this.mushroom= new Mushroom(0,"","","", false, "", "","","","","","","","","","","","","");
    this.mushrooms = new Array();
  }

  ngOnInit(): void {
    this.reloadData();
    this.id = this.route.snapshot.params['id'];
    
    this.mushroomService.getMushroomById(this.id)
      .subscribe(data => {
        console.log(data)
        this.mushroom = data;
      }, error => console.log(error));
    console.log(this.mushroom);
  }

  reloadData() {
    this.mushroomService.getMushroomsList().subscribe(apiResponse => {
      this.mushrooms = apiResponse;
    })
;
  }



  onSubmit(): void{
    console.log('Created User');
    console.log(this.quizzForm.value);
    
    console.log(this.quizzForm.get('isEdible')?.value);
    console.log(this.mushroom.edible);
    let myString = this.mushroom.edible? "true":"false";
    if(this.quizzForm.get('isEdible')?.value==myString){
      window.alert("Good answer!");
    }else{window.alert("Wrong!");}
    console.log(myString);



   }


   mushroomList(): void{
     this.id++;
    this.router.navigate(['quizz/',this.id]).then(() => {
      window.location.reload();
    });

  }

}
