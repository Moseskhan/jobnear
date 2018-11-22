import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerChecklistComponent } from './employer-checklist.component';

describe('EmployerChecklistComponent', () => {
  let component: EmployerChecklistComponent;
  let fixture: ComponentFixture<EmployerChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
