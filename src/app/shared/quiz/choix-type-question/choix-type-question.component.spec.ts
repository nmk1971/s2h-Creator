import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixTypeQuestionComponent } from './choix-type-question.component';

describe('ChoirTypeQuestionComponent', () => {
  let component: ChoixTypeQuestionComponent;
  let fixture: ComponentFixture<ChoixTypeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixTypeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixTypeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
