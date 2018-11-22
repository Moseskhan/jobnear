import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractedjobsComponent } from './contractedjobs.component';

describe('ContractedjobsComponent', () => {
  let component: ContractedjobsComponent;
  let fixture: ComponentFixture<ContractedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
