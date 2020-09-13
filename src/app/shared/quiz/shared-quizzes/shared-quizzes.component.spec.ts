import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedQuizzesComponent } from './shared-quizzes.component';

describe('SharedQuizzesComponent', () => {
  let component: SharedQuizzesComponent;
  let fixture: ComponentFixture<SharedQuizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedQuizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
