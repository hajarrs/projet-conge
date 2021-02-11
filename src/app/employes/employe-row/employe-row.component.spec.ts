import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeRowComponent } from './employe-row.component';

describe('EmployeRowComponent', () => {
  let component: EmployeRowComponent;
  let fixture: ComponentFixture<EmployeRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
