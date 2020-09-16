import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSharedQuizContentComponent } from './view-shared-quiz-content.component';

describe('ViewSharedQuizContentComponent', () => {
  let component: ViewSharedQuizContentComponent;
  let fixture: ComponentFixture<ViewSharedQuizContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSharedQuizContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSharedQuizContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
