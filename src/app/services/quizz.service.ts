import { Answer } from './../models/answer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  // answer!:Answer;

  // answers: Array<Answer> = [];

  answers: string[];
  scores: number;

  constructor() { 
    localStorage.removeItem('answers');
    localStorage.removeItem('scores');
    this.answers=[];
    this.scores=0;
    // localStorage.setItem("answers", JSON.stringify(this.answers));
  }

  
  addAnswer(id: number, answer: string, score: number): void {
    if(id==0 || id==1){
      // this.answers.push(answer);
      localStorage.removeItem('answers');
      localStorage.removeItem('scores');
      this.answers[id]=answer;
      console.log("2", this.answers);
      localStorage.setItem("answers", JSON.stringify(this.answers));
      this.scores=score;
      localStorage.setItem("scores", JSON.stringify(this.scores));

    }else{
      var storedAnswers = JSON.parse(localStorage.getItem("answers")!);
      var storedScores = JSON.parse(localStorage.getItem("scores")!);
      this.answers.push(storedAnswers);
      this.scores=storedScores;
      console.log("1", this.answers);
      console.log("1", this.scores);
      // this.answers.push(answer);
      this.answers[id]=answer;
      console.log("2", this.answers);
      this.scores=storedScores+score;
      console.log("1", this.scores);
      localStorage.setItem("answers", JSON.stringify(this.answers));
      localStorage.setItem("scores", JSON.stringify(this.scores));
    }

  }

  getAnswers(){
    // var storedAnswers = JSON.parse(localStorage.getItem("answers")!);
    // this.answers.push(storedAnswers);
    // console.log("2", this.answers);
    return this.answers;
    
}

getScores(){
  // var storedAnswers = JSON.parse(localStorage.getItem("answers")!);
  // this.answers.push(storedAnswers);
  // console.log("2", this.answers);
  return this.scores;
  
}
}
