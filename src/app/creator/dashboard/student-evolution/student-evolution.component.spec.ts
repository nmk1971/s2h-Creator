import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEvolutionComponent } from './student-evolution.component';

describe('StudentEvolutionComponent', () => {
  let component: StudentEvolutionComponent;
  let fixture: ComponentFixture<StudentEvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
