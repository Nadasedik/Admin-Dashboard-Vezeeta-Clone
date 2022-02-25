import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditDoctorComponent } from './Components/Doctors/Add-Edit-Doctor-component/add-edit-doctor/add-edit-doctor.component';
import { ViewAllDoctorsComponent } from './Components/Doctors/viewAllDoctors/view-all-doctors/view-all-doctors.component';


import {MaterialDesignModule}  from './Modules/material-design/material-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarCompComponent } from './Components/Navbar/navbar-comp/navbar-comp.component';
import { SideNavbarCompComponent } from './Components/sideBar/side-navbar-comp/side-navbar-comp.component';
import { environment } from 'src/environments/environment';


//firestore
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AddUpdateDepartmentComponent } from './Components/add-update-department/add-update-department.component';
import { AllDepartmentsComponent } from './Components/all-departments/all-departments.component';
import { BreadcrumbComponent } from './Components/common/breadcrumb/breadcrumb.component';
import { DialogComponent } from './Components/common/dialog/dialog.component';
import { FilterComponent } from './Components/common/filter/filter.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { TimeStampToDatePipe } from './Pipes/time-stamp-to-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddEditDoctorComponent,
    ViewAllDoctorsComponent,
    NavbarCompComponent,
    SideNavbarCompComponent,
    AddUpdateDepartmentComponent,
    AllDepartmentsComponent,
    BreadcrumbComponent,
    DialogComponent,
    FilterComponent,
    DepartmentsComponent,
    TimeStampToDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firestoreConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
