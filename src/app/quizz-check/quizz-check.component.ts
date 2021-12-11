import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mushroom } from '../models/mushroom.model';
import { MushroomService } from '../services/mushroom.service';
import { QuizzService } from '../services/quizz.service';

@Component({
  selector: 'app-quizz-check',
  templateUrl: './quizz-check.component.html',
  styleUrls: ['./quizz-check.component.css']
})
export class QuizzCheckComponent implements OnInit {

  id: number;
  score=0;
  length: number;
  answer:string;
  answerType = false;
  mushroomName: string;
  mushroom: Mushroom;
  submitted = false;



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
    this.answer="";
    this.mushroomName="";
    this.mushroom= new Mushroom(0,"","","", false, "", "","","","","","","","","","","","","");
    this.mushrooms = new Array();
  }

  ngOnInit(): void {
    this.submitted = false;
    this.answerType = false;
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
    this.submitted = false;
    this.answerType = false;
    console.log('Created User');
    console.log(this.quizzForm.value);
    
    console.log(this.quizzForm.get('isEdible')?.value);
    console.log(this.mushroom.edible);
    let myString = this.mushroom.edible? "true":"false";
    if(this.quizzForm.get('isEdible')?.value==myString){
      this.answer="Question" + this.id + ": Good answer! "+ this.mushroom.mushroomName + " is " + this.mushroom.foodValue;
      // window.alert("Good answer! "+ this.mushroom.mushroomName + " is " + this.mushroom.foodValue);
      this.score++;
      this.quizzService.addAnswer(this.id, this.answer, this.score);
      this.submitted = true;
      this.answerType = true;
    }else{
      this.answer="Question" + this.id + ": Wrong! "+ this.mushroom.mushroomName + " is " + this.mushroom.foodValue;
      // window.alert("Wrong! "+ this.mushroom.mushroomName + " is " + this.mushroom.foodValue);
      this.score;
      this.quizzService.addAnswer(this.id, this.answer, this.score);
      this.submitted = true;
      this.answerType = false;
    }


    // this.id++;
     
    // if(this.id<=this.length){
    //    this.router.navigate(['quizz/',this.id]).then(() => {
    //    window.location.reload();
    //    });
    // }else{
    //  this.router.navigate(['answer']);
    // }

   }

   goNext(): void {
        this.id++;
     
    if(this.id<=this.length){
      this.router.navigate(['quizz/',this.id]);
      // location.href = 'quizz/'+this.id;
      //  this.router.navigate(['quizz/',this.id]).then(() => {
      //  window.location.reload();
      //  });
    }else{
     this.router.navigate(['answer']);
    }
  }

}
