import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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

}
