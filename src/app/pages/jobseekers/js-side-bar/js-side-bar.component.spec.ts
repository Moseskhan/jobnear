import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSideBarComponent } from './js-side-bar.component';

describe('JsSideBarComponent', () => {
  let component: JsSideBarComponent;
  let fixture: ComponentFixture<JsSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
