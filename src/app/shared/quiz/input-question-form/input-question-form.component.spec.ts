import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuestionFormComponent } from './input-question-form.component';

describe('InputQuestionFormComponent', () => {
  let component: InputQuestionFormComponent;
  let fixture: ComponentFixture<InputQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
