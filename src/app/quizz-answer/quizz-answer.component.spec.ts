import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzAnswerComponent } from './quizz-answer.component';

describe('QuizzAnswerComponent', () => {
  let component: QuizzAnswerComponent;
  let fixture: ComponentFixture<QuizzAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
