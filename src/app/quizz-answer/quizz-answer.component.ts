import { Answer } from './../models/answer.model';
import { QuizzService } from './../services/quizz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MushroomService } from '../services/mushroom.service';

@Component({
  selector: 'app-quizz-answer',
  templateUrl: './quizz-answer.component.html',
  styleUrls: ['./quizz-answer.component.css']
})
export class QuizzAnswerComponent implements OnInit {


  answers: Array<Answer> = [];

  constructor(private route: ActivatedRoute,    private quizzService: QuizzService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.quizzService.getAnswers();
  }

  again(): void{
    this.router.navigate(['quizz/1']);
  }


}
