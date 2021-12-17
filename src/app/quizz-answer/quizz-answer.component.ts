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


  answers: string[];
  scores: number;

  constructor(private route: ActivatedRoute, private quizzService: QuizzService, private router: Router) {
    this.answers = [];
    this.scores = 0;
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.answers = this.quizzService.getAnswers();
    this.scores = this.quizzService.getScores();
  }

  again(): void {
    localStorage.removeItem('answers');
    localStorage.removeItem('scores');
    this.router.navigate(['quizz/1']);
  }


}
