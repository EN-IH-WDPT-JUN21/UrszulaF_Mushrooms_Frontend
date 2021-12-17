import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalNew } from '../models/animal-new.model';
import { Animal } from '../models/animal.model';
import { AnimalService } from '../services/animal.service';
import { CustomValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-animal-update',
  templateUrl: './animal-update.component.html',
  styleUrls: ['./animal-update.component.css']
})
export class AnimalUpdateComponent implements OnInit {

  animal: AnimalNew;
  selectedAnimal: Animal;
  id: number;
  animalName0 = "";

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
    this.remarks = new FormControl('', [Validators.maxLength(255)]);


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
    this.selectedAnimal = new Animal(0, "", "", "", "", "", "", "");
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.animalService.getAnimalById(this.id)
      .subscribe(data => {
        console.log(data)
        this.selectedAnimal = data;
        this.animalForm.patchValue({
          photoURL: this.selectedAnimal.photoURL,
          animalName: this.selectedAnimal.animalName,
          otherNames: this.selectedAnimal.otherNames,
          animalType: this.selectedAnimal.animalType,
          animalSize: this.selectedAnimal.animalSize,
          description: this.selectedAnimal.description,
          remarks: this.selectedAnimal.remarks
        });
      }, error => console.log(error));

  }



  onSubmit(): void {
    console.log('Created Animal');
    console.log(this.animalForm.value);

    // const dateISO=new Date();

    // const dateISO = moment(this.whenAnimal.value).toISOString().slice(0, -1);
    // console.log(dateISO);
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
    this.updateAnimal();

  }

  updateAnimal() {
    this.animalService.updateAnimal(this.id, this.animalForm.value)
      .subscribe(data => {
        console.log(data);
        this.animal = new AnimalNew(
          this.photoURL.value,
          this.animalName.value,
          this.otherNames.value,
          this.animalType.value,
          this.animalSize.value,
          this.description.value,
          this.remarks.value
        );
        this.animalDetails(this.id);
      }, error => console.log(error));
  }


  animalDetails(id: number) {
    this.router.navigate(['animal-details', id]);
  }
}
