import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobSeekersComponent } from './admin-job-seekers.component';

describe('AdminJobSeekersComponent', () => {
  let component: AdminJobSeekersComponent;
  let fixture: ComponentFixture<AdminJobSeekersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJobSeekersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobSeekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
