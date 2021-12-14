import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MushroomNew } from '../models/mushroom-new.model';
import { MushroomService } from '../services/mushroom.service';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-mushroom-form',
  templateUrl: './mushroom-form.component.html',
  styleUrls: ['./mushroom-form.component.css']
})
export class MushroomFormComponent implements OnInit {

  mushroom: MushroomNew;

  consumables: string[];

  mushroomForm: FormGroup;
  photoURL: FormControl;
  mushroomName: FormControl;
  otherNames: FormControl;
  edibleString: FormControl;
  consumable: FormControl;
  whenFruiting: FormControl;
  whereFruiting: FormControl;
  hat: FormControl;
  stem: FormControl;
  ring: FormControl;
  gills: FormControl;
  tubes: FormControl;
  pulp: FormControl;
  smell: FormControl;
  taste: FormControl;
  differentiation: FormControl;
  similar: FormControl;
  remarks: FormControl;
  foodValue: FormControl;

  constructor(        private mushroomService: MushroomService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 

    this.consumables=['GREAT', 'GOOD', 'AVERAGE', 'INEDIBLE', 'POISONOUS', 'DEADLY_POISONOUS'];
    this.photoURL= new FormControl('');
    this.mushroomName= new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(25), CustomValidator.nameValidator]);
    this.otherNames= new FormControl('', [Validators.minLength(3), Validators.maxLength(25)]);
    this.edibleString=new FormControl('', [ Validators.required]);
    this.consumable = new FormControl('', [ Validators.required]);
    this.whenFruiting = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25), ]);
    this.whereFruiting = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25), ]);
    this.hat = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.stem = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.ring = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.gills = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.tubes = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.pulp = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.smell = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.taste = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.differentiation = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.similar = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);
    this.remarks = new FormControl('', [ Validators.minLength(3), Validators.maxLength(25) ]);
    this.foodValue = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]);

    this.mushroomForm = new FormGroup({
      photoURL:this.photoURL,
      mushroomName: this.mushroomName,
      otherNames: this.otherNames,
      edibleString: this.edibleString,
      consumable: this.consumable,
      whenFruiting: this.whenFruiting,
      whereFruiting: this.whereFruiting,
      hat: this.hat,
      stem: this.stem,
      ring: this.ring,
      gills: this.gills,
      tubes: this.tubes,
      pulp: this.pulp,
      smell: this.smell,
      taste: this.taste,
      differentiation: this.differentiation,
      similar: this.similar,
      remarks: this.remarks,
      foodValue: this.foodValue
    })

    this.mushroom= new MushroomNew("","","","", "", "","","","","","","","","","","","","","");
  }

  ngOnInit(): void {
  }



  onSubmit(): void{
    console.log('Created User');
    console.log(this.mushroomForm.value);

    console.log(this.mushroomName.value);
    this.mushroom=new MushroomNew(
      this.photoURL.value,
      this.mushroomName.value,
      this.otherNames.value,
      this.edibleString.value,
      this.consumable.value,
      this.whenFruiting.value,
      this.whereFruiting.value,
      this.hat.value,
      this.stem.value,
      this.ring.value,
      this.gills.value,
      this.tubes.value,
      this.pulp.value,
      this.smell.value,
      this.taste.value,
      this.differentiation.value,
      this.similar.value,
      this.remarks.value,
      this.foodValue.value
    );
    console.log('testpayload', this.mushroom);
    this.mushroomService
    .createMushroom(this.mushroom).subscribe(data => {
      console.log(data)
      this.mushroom=new MushroomNew(
        this.photoURL.value,
        this.mushroomName.value,
        this.otherNames.value,
        this.edibleString.value,
        this.consumable.value,
        this.whenFruiting.value,
        this.whereFruiting.value,
        this.hat.value,
        this.stem.value,
        this.ring.value,
        this.gills.value,
        this.tubes.value,
        this.pulp.value,
        this.smell.value,
        this.taste.value,
        this.differentiation.value,
        this.similar.value,
        this.remarks.value,
        this.foodValue.value
      );
      window.location.href="/mushroom-list";
    },
    error => console.log(error));
   }


   mushroomList(): void{
    this.router.navigate(['mushroom-list']);
  }

}
