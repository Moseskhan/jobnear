import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsRightSidebarComponent } from './js-right--sidebar.component';

describe('JsRightSidebarComponent', () => {
  let component: JsRightSidebarComponent;
  let fixture: ComponentFixture<JsRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
