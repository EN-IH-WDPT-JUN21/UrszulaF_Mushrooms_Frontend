import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalNew } from '../models/animal-new.model';
import { AnimalService } from '../services/animal.service';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  animal: AnimalNew;

  animalForm: FormGroup;
  photoURL: FormControl;
  animalName: FormControl;
  otherNames: FormControl;
  animalType: FormControl;
  animalSize: FormControl;
  description: FormControl;
  remarks: FormControl;

  constructor(private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.photoURL = new FormControl('');
    this.animalName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25), CustomValidator.nameValidator]);
    this.otherNames = new FormControl('', [Validators.minLength(3), Validators.maxLength(100)]);
    this.animalType = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25),]);
    this.animalSize = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(250),]);
    this.description = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]);
    this.remarks = new FormControl('', [Validators.minLength(3), Validators.maxLength(250)]);


    this.animalForm = new FormGroup({
      photoURL: this.photoURL,
      animalName: this.animalName,
      otherNames: this.otherNames,
      animalType: this.animalType,

      animalSize: this.animalSize,
      description: this.description,
      remarks: this.remarks
    })

    this.animal = new AnimalNew("", "", "", "", "", "", "");
  }

  ngOnInit(): void {
  }



  onSubmit(): void {
    console.log('Created User');
    console.log(this.animalForm.value);

    console.log(this.animalName.value);
    this.animal = new AnimalNew(
      this.photoURL.value,
      this.animalName.value,
      this.otherNames.value,
      this.animalType.value,
      this.animalSize.value,
      this.description.value,
      this.remarks.value
    );
    console.log('testpayload', this.animal);
    this.animalService
      .createAnimal(this.animal).subscribe(data => {
        console.log(data)
        this.animal = new AnimalNew(
          this.photoURL.value,
          this.animalName.value,
          this.otherNames.value,
          this.animalType.value,
          this.animalSize.value,
          this.description.value,
          this.remarks.value
        );
        window.location.href = "/animal-list";
      },
        error => console.log(error));
  }


  animalList(): void {
    this.router.navigate(['animal-list']);
  }

}
