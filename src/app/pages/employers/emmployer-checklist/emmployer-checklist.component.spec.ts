import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmployerChecklistComponent } from './emmployer-checklist.component';

describe('EmmployerChecklistComponent', () => {
  let component: EmmployerChecklistComponent;
  let fixture: ComponentFixture<EmmployerChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmmployerChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmmployerChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
