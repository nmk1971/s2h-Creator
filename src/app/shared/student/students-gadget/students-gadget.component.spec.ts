import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsGadgetComponent } from './students-gadget.component';

describe('StudentsGadgetComponent', () => {
  let component: StudentsGadgetComponent;
  let fixture: ComponentFixture<StudentsGadgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsGadgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsGadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
