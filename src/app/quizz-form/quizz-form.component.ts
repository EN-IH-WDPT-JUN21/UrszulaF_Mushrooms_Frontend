import { QuizzService } from './../services/quizz.service';
import { Mushroom } from './../models/mushroom.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MushroomService } from '../services/mushroom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-quizz-form',
  templateUrl: './quizz-form.component.html',
  styleUrls: ['./quizz-form.component.css']
})
export class QuizzFormComponent implements OnInit {

  answer!:Answer;
  id: number;
  length: number;
  answerName:string;
  mushroomName: string;
  mushroom: Mushroom;




  mushrooms: Array<Mushroom>;

  quizzForm: FormGroup;

  isEdible: FormControl;


  constructor(        private route: ActivatedRoute,    private mushroomService: MushroomService, private router: Router, private quizzService: QuizzService) { 

    
    this.isEdible = new FormControl('', [ Validators.required]);


    this.quizzForm = new FormGroup({
      isEdible: this.isEdible
    })

    this.id=1;
    this.length=100;
    this.answerName="";
    this.mushroomName="";
    this.mushroom= new Mushroom(0,"","","", false, "", "","","","","","","","","","","","","");
    this.mushrooms = new Array();
  }

  ngOnInit(): void {
    this.reloadData();
    this.id = this.route.snapshot.params['id'];
    this.length=this.mushrooms.length;
    console.log(this.length);
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
      this.length=this.mushrooms.length;
      console.log(this.length);
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
      this.answerName="Question" + this.id + ": Good answer! "+ this.mushroom.mushroomName + " is " + this.mushroom.foodValue;
      window.alert("Good answer! "+ this.mushroom.mushroomName + " is " + this.mushroom.foodValue);
      this.answer=new Answer(this.answerName);
      this.quizzService.addAnswer(this.answer);
    }else{
      this.answerName="Question" + this.id + ": Wrong! "+ this.mushroom.mushroomName + " is " + this.mushroom.foodValue;
      window.alert("Wrong! "+ this.mushroom.mushroomName + " is " + this.mushroom.foodValue);
      this.answer=new Answer(this.answerName);
      this.quizzService.addAnswer(this.answer);
    }


    this.id++;
     
    if(this.id<=this.length){
       this.router.navigate(['quizz/',this.id]).then(() => {
       window.location.reload();
       });
    }else{
     this.router.navigate(['answer']);
    }

   }



}
