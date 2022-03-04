
import { AddEditPatientsComponent } from './Components/AddEditPatients/AddEditPatients.component';
import { PatientsComponent } from './Components/Patients/Patients.component';

import { MedicineEditComponent } from './Components/medicine-edit/medicine-edit.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialDesignModule } from './Modules/material-design/material-design.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



//firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { getStorage, provideStorage } from '@angular/fire/storage';
//import {AngularFireStorageModule} from '@angular/fire/storage'


import { environment } from 'src/environments/environment';

import { AddEditDoctorComponent } from './Components/Doctors/Add-Edit-Doctor-component/add-edit-doctor/add-edit-doctor.component';
import { ViewAllDoctorsComponent } from './Components/Doctors/viewAllDoctors/view-all-doctors/view-all-doctors.component';

import { AddUpdateDepartmentComponent } from './Components/add-update-department/add-update-department.component';
import { AllDepartmentsComponent } from './Components/all-departments/all-departments.component';
import { BreadcrumbComponent } from './Components/common/breadcrumb/breadcrumb.component';
import { DialogComponent } from './Components/common/dialog/dialog.component';
import { FilterComponent } from './Components/common/filter/filter.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { TimeStampToDatePipe } from './Pipes/time-stamp-to-date.pipe';
import { HeaderComponent } from './Components/header/header.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MedicineListComponent } from './Components/medicine-list/medicine-list.component';
import { MedicineAddComponent } from './Components/medicine-add/medicine-add.component';

import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    AddEditDoctorComponent,
    ViewAllDoctorsComponent,
    AddUpdateDepartmentComponent,
    AllDepartmentsComponent,
    BreadcrumbComponent,
    DialogComponent,
    FilterComponent,
    DepartmentsComponent,
    TimeStampToDatePipe,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    DashboardComponent,
    MedicineListComponent,
    MedicineAddComponent,

    PatientsComponent,
    AddEditPatientsComponent,

    MedicineEditComponent


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firestoreConfig),
    AngularFireStorageModule
  ],
  providers: [
    {provide: BUCKET, useValue: 'my-bucket-name'} //to customise the storage bucket.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
