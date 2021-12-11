import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzCheckComponent } from './quizz-check.component';

describe('QuizzCheckComponent', () => {
  let component: QuizzCheckComponent;
  let fixture: ComponentFixture<QuizzCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
