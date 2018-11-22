import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsProfileSideBarComponent } from './js-profile-side-bar.component';

describe('JsProfileSideBarComponent', () => {
  let component: JsProfileSideBarComponent;
  let fixture: ComponentFixture<JsProfileSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsProfileSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsProfileSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
