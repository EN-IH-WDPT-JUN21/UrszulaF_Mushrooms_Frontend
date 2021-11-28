import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomListComponent } from './mushroom-list.component';

describe('MushroomListComponent', () => {
  let component: MushroomListComponent;
  let fixture: ComponentFixture<MushroomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MushroomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
