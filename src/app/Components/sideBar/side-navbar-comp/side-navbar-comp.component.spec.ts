import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavbarCompComponent } from './side-navbar-comp.component';

describe('SideNavbarCompComponent', () => {
  let component: SideNavbarCompComponent;
  let fixture: ComponentFixture<SideNavbarCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavbarCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavbarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
