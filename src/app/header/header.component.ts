import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn=false;
  public isAdmin=false;

  constructor(private loginService:LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    this.isAdmin = this.loginService.isAdmin();
  }

  logoutUser(){
    this.loginService.logout();
    location.reload();
    this.goToLogin();
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
