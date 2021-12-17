import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mushroom } from '../models/mushroom.model';
import { LoginService } from '../services/login.service';
import { MushroomService } from '../services/mushroom.service';

@Component({
  selector: 'app-mushroom-item',
  templateUrl: './mushroom-item.component.html',
  styleUrls: ['./mushroom-item.component.css']
})
export class MushroomItemComponent implements OnInit {
  id: number;
  mushroomName: string;
  mushroom: Mushroom;
  txt: String = "";
  public isAdmin = false;
  public isPremium = false;

  clicked = false;

  constructor(private route: ActivatedRoute, private mushroomService: MushroomService, private router: Router, private loginService: LoginService) {
    this.id = 0;
    this.mushroomName = "";
    this.mushroom = new Mushroom(0, "", "", "", false, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.mushroomService.getMushroomById(this.id)
      .subscribe(data => {
        console.log(data)
        this.mushroom = data;
      }, error => console.log(error));
    this.isAdmin = this.loginService.isAdmin();
    this.isPremium = this.loginService.isPremium();
  }

  deleteMushroom(id: number) {
    if (confirm("Are you sure you want to delete this mushroom?") == true) {
      this.txt = "You pressed OK!";
      this.mushroomService.deleteMushroom(id)
        .subscribe(
          data => {
            console.log(data);
            location.reload();
          },
          error => console.log(error));
      this.mushroomList();
    } else {
      this.txt = "You canceled!";
    }
  }

  mushroomList(): void {
    this.router.navigate(['mushroom-list']);
  }

  updateMushroom(id: number) {
    this.router.navigate(['mushroom-update', id]);
  }

}
