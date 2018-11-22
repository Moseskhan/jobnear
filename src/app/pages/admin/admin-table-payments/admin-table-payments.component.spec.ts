import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTablePaymentsComponent } from './admin-table-payments.component';

describe('AdminTablePaymentsComponent', () => {
  let component: AdminTablePaymentsComponent;
  let fixture: ComponentFixture<AdminTablePaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTablePaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTablePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
