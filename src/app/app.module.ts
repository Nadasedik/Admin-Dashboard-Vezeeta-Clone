
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialDesignModule } from './Modules/material-design/material-design.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientsComponent } from './Components/Patients/Patients.component';
import { MedicineEditComponent } from './Components/medicine-edit/medicine-edit.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './Components/common/dialog/dialog.component';
//firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
//firestore
import { AddUpdateDepartmentComponent } from './Components/add-update-department/add-update-department.component';
import { AllDepartmentsComponent } from './Components/all-departments/all-departments.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { TimeStampToDatePipe } from './Pipes/time-stamp-to-date.pipe';
import { HeaderComponent } from './Components/header/header.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { MedicineListComponent } from './Components/medicine-list/medicine-list.component';
import { MedicineAddComponent } from './Components/medicine-add/medicine-add.component';
import { DialogDoctorCompComponent } from './Components/common/dialog-doctor-comp/dialog-doctor-comp.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { SigninComponent } from './Components/signin/signin.component';
import { AddEditDoctorComponent } from 'src/app/Components/Doctors/Add-Edit-Doctor-component/add-edit-doctor/add-edit-doctor.component';
import { ViewAllDoctorsComponent } from 'src/app/Components/Doctors/viewAllDoctors/view-all-doctors/view-all-doctors.component';
import { MatConfirmDialogComponent } from './Components/medicine-edit/MatConfirmDialog/MatConfirmDialog.component';
import { AddEditComponent } from './Components/admin/add-edit/add-edit.component';
import { ViewAllAdminComponent } from './Components/admin/view-all-admin/view-all-admin.component';
import { EditAdminComponent } from './Components/admin/edit-admin/edit-admin.component';
1
@NgModule({
  declarations: [
    AppComponent,
    AddUpdateDepartmentComponent,
    AllDepartmentsComponent,
    DialogComponent,
    DepartmentsComponent,
    TimeStampToDatePipe,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    MedicineListComponent,
    MedicineAddComponent,
    MedicineEditComponent,
    DialogDoctorCompComponent,
    MainLayoutComponent,
    SigninComponent,
    PatientsComponent,
    AddEditDoctorComponent,
    ViewAllDoctorsComponent,
    MatConfirmDialogComponent,
    AddEditComponent,
    ViewAllAdminComponent,
    EditAdminComponent,
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
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firestoreConfig)),
    provideStorage(() => getStorage()),
  ],

  providers: [
    { provide: BUCKET, useValue: 'gs://vezeeta-website-db.appspot.com' } //to customise the storage bucket.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



