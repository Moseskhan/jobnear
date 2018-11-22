import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJobPageComponent } from './main-job-page.component';

describe('MainJobPageComponent', () => {
  let component: MainJobPageComponent;
  let fixture: ComponentFixture<MainJobPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainJobPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
