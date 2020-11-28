import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectResponsesBySessionComponent } from './correct-responses-by-session.component';

describe('CorrectResponsesBySessionComponent', () => {
  let component: CorrectResponsesBySessionComponent;
  let fixture: ComponentFixture<CorrectResponsesBySessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectResponsesBySessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectResponsesBySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
