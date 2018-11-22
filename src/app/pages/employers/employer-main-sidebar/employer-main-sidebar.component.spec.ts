import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerMainSidebarComponent } from './employer-main-sidebar.component';

describe('EmployerMainSidebarComponent', () => {
  let component: EmployerMainSidebarComponent;
  let fixture: ComponentFixture<EmployerMainSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerMainSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerMainSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
