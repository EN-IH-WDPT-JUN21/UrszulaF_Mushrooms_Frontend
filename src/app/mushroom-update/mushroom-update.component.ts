import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MushroomNew } from '../models/mushroom-new.model';
import { Mushroom } from '../models/mushroom.model';
import { MushroomService } from '../services/mushroom.service';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-mushroom-update',
  templateUrl: './mushroom-update.component.html',
  styleUrls: ['./mushroom-update.component.css']
})
export class MushroomUpdateComponent implements OnInit {

  mushroom: MushroomNew;
  selectedMushroom: Mushroom;
  id: number;
  mushroomName0="";

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
      this.otherNames= new FormControl('', [Validators.minLength(3), Validators.maxLength(100)]);
      this.edibleString=new FormControl('', [ Validators.required]);
      this.consumable = new FormControl('', [ Validators.required]);
      this.whenFruiting = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100), ]);
      this.whereFruiting = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100), ]);
      this.hat = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.stem = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.ring = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.gills = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.tubes = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.pulp = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.smell = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.taste = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.differentiation = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.similar = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
      this.remarks = new FormControl('', [ Validators.minLength(3), Validators.maxLength(100) ]);
      this.foodValue = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]);
  
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
    this.selectedMushroom= new Mushroom(0,"","","",false, "", "","","","","","","","","","","","","","");
    this.id=0;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.mushroomService.getMushroomById(this.id)
      .subscribe(data => {
        console.log(data)
        this.selectedMushroom = data;
        this.mushroomForm.patchValue({
          photoURL:this.selectedMushroom.photoURL,
          mushroomName: this.selectedMushroom.mushroomName,
          otherNames: this.selectedMushroom.otherNames,
          edibleString: this.selectedMushroom.edible,
          consumable: this.selectedMushroom.consumable,
          whenFruiting: this.selectedMushroom.whenFruiting,
          whereFruiting: this.selectedMushroom.whereFruiting,
          hat: this.selectedMushroom.hat,
          stem: this.selectedMushroom.stem,
          ring: this.selectedMushroom.ring,
          gills: this.selectedMushroom.gills,
          tubes: this.selectedMushroom.tubes,
          pulp: this.selectedMushroom.pulp,
          smell: this.selectedMushroom.smell,
          taste: this.selectedMushroom.taste,
          differentiation: this.selectedMushroom.differentiation,
          similar: this.selectedMushroom.similar,
          remarks: this.selectedMushroom.remarks,
          foodValue: this.selectedMushroom.foodValue
        });
      }, error => console.log(error));
      // this.mushroomForm.get('mushroomName').setValue(this.selectedMushroom.mushroomName);
      // this.mushroomForm.patchValue({mushroomName: this.selectedMushroom.mushroomName});
  }



  onSubmit(): void{
    console.log('Created Mushroom');
    console.log(this.mushroomForm.value);

// const dateISO=new Date();

// const dateISO = moment(this.whenMushroom.value).toISOString().slice(0, -1);
// console.log(dateISO);
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
    this.updateMushroom();

   }

   updateMushroom() {
    this.mushroomService.updateMushroom(this.id, this.mushroomForm.value)
      .subscribe(data => {
        console.log(data);
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
        this.mushroomDetails(this.id);
      }, error => console.log(error));
  }


  mushroomDetails(id: number){
    this.router.navigate(['mushroom-details', id]);
  }

}
