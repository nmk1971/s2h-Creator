import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmQuestionFormComponent } from './qcm-question-form.component';

describe('QcmQuestionFormComponent', () => {
  let component: QcmQuestionFormComponent;
  let fixture: ComponentFixture<QcmQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
