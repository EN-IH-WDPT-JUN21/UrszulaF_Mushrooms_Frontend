import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdatePhotoComponent } from './user-update-photo.component';

describe('UserUpdatePhotoComponent', () => {
  let component: UserUpdatePhotoComponent;
  let fixture: ComponentFixture<UserUpdatePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdatePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdatePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
