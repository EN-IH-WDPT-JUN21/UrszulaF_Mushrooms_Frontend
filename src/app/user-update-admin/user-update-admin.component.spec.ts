import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateAdminComponent } from './user-update-admin.component';

describe('UserUpdateAdminComponent', () => {
  let component: UserUpdateAdminComponent;
  let fixture: ComponentFixture<UserUpdateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
