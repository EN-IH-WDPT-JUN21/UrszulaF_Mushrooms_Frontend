import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username!: string | null;

  constructor() { }

  ngOnInit(): void {
  }

  getData() {
    if (localStorage.getItem('username')){
      return localStorage.getItem('username')
    }
    return 'Anonymous'
    
 }


}
