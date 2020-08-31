import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorLandPageComponent } from './creator-land-page.component';

describe('CreatorLandPageComponent', () => {
  let component: CreatorLandPageComponent;
  let fixture: ComponentFixture<CreatorLandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorLandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
