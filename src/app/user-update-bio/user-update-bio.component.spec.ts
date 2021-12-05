import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateBioComponent } from './user-update-bio.component';

describe('UserUpdateBioComponent', () => {
  let component: UserUpdateBioComponent;
  let fixture: ComponentFixture<UserUpdateBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
