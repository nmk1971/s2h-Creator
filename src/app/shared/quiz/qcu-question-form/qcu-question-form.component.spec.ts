import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcuQuestionFormComponent } from './qcu-question-form.component';

describe('QcuQuestionFormComponent', () => {
  let component: QcuQuestionFormComponent;
  let fixture: ComponentFixture<QcuQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcuQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcuQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
