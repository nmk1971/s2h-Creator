import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsesBySurveyComponent } from './responses-by-survey.component';

describe('ResponsesBySurveyComponent', () => {
  let component: ResponsesBySurveyComponent;
  let fixture: ComponentFixture<ResponsesBySurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsesBySurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsesBySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
