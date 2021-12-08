import { Answer } from './../models/answer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  answer!:Answer;

  answers: Array<Answer> = [];

  constructor() { }

  
  addAnswer(answer: Answer): void {
    this.answers.push(answer);
    console.log(this.answers);
  
  }

  getAnswers(){
    return this.answers;
}
}
