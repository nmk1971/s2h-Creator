import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingQuestionFormComponent } from './ordering-question-form.component';

describe('OrderingQuestionFormComponent', () => {
  let component: OrderingQuestionFormComponent;
  let fixture: ComponentFixture<OrderingQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderingQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
