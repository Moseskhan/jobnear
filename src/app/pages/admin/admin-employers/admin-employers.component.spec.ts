import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployersComponent } from './admin-employers.component';

describe('AdminEmployersComponent', () => {
  let component: AdminEmployersComponent;
  let fixture: ComponentFixture<AdminEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
