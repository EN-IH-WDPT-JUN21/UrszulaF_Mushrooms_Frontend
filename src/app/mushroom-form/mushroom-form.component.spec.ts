import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomFormComponent } from './mushroom-form.component';

describe('MushroomFormComponent', () => {
  let component: MushroomFormComponent;
  let fixture: ComponentFixture<MushroomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MushroomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
