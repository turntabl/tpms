import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedprojectsComponent } from './assignedprojects.component';

describe('AssignedprojectsComponent', () => {
  let component: AssignedprojectsComponent;
  let fixture: ComponentFixture<AssignedprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
