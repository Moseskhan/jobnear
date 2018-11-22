import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJobDetailsComponent } from './single-job-details.component';

describe('SingleJobDetailsComponent', () => {
  let component: SingleJobDetailsComponent;
  let fixture: ComponentFixture<SingleJobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleJobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
