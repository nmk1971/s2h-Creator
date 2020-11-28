import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAvgQuizComponent } from './stat-avg-quiz.component';

describe('StatAvgQuizComponent', () => {
  let component: StatAvgQuizComponent;
  let fixture: ComponentFixture<StatAvgQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatAvgQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAvgQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
