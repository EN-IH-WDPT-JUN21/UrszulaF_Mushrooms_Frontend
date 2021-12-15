import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomUpdateComponent } from './mushroom-update.component';

describe('MushroomUpdateComponent', () => {
  let component: MushroomUpdateComponent;
  let fixture: ComponentFixture<MushroomUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MushroomUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
