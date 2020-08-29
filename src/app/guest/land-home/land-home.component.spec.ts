import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandHomeComponent } from './land-home.component';

describe('LandHomeComponent', () => {
  let component: LandHomeComponent;
  let fixture: ComponentFixture<LandHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
