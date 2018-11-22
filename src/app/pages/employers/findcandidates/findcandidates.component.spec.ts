import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcandidatesComponent } from './findcandidates.component';

describe('FindcandidatesComponent', () => {
  let component: FindcandidatesComponent;
  let fixture: ComponentFixture<FindcandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindcandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
