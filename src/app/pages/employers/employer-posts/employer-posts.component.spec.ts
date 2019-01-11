import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerPostsComponent } from './employer-posts.component';

describe('EmployerPostsComponent', () => {
  let component: EmployerPostsComponent;
  let fixture: ComponentFixture<EmployerPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
