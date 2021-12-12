import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username!: string | null;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit(): void {
  }

  getData() {
    if (localStorage.getItem('username')){
      return localStorage.getItem('username')
    }
    return 'Anonymous'
    
 }

 sendToLogin(): void {
  this.router.navigate(['/login']);
}


 sendToRegister(): void {
  this.router.navigate(['/register']);
}

sendToMushrooms(): void {
  this.router.navigate(['/mushroom-list']);
}

sendToEvents(): void {
  this.router.navigate(['/event-list']);
}

sendToQuizz(): void {
  this.router.navigate(['/quizz/1']);
}

sendToAnimals(): void {
  this.router.navigate(['/animal-list']);
}
}
