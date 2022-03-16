import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDoctorCompComponent } from './dialog-doctor-comp.component';

describe('DialogDoctorCompComponent', () => {
  let component: DialogDoctorCompComponent;
  let fixture: ComponentFixture<DialogDoctorCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDoctorCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDoctorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
