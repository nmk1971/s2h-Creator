import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSessionListComponent } from './widget-session-list.component';

describe('WidgetSessionListComponent', () => {
  let component: WidgetSessionListComponent;
  let fixture: ComponentFixture<WidgetSessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
