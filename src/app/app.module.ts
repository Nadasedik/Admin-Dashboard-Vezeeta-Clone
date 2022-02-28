import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditDoctorComponent } from './Components/Doctors/Add-Edit-Doctor-component/add-edit-doctor/add-edit-doctor.component';
import { ViewAllDoctorsComponent } from './Components/Doctors/viewAllDoctors/view-all-doctors/view-all-doctors.component';

import { MaterialDesignModule } from './Modules/material-design/material-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

//firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddUpdateDepartmentComponent } from './Components/add-update-department/add-update-department.component';
import { AllDepartmentsComponent } from './Components/all-departments/all-departments.component';
import { BreadcrumbComponent } from './Components/common/breadcrumb/breadcrumb.component';
import { DialogComponent } from './Components/common/dialog/dialog.component';
import { FilterComponent } from './Components/common/filter/filter.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { TimeStampToDatePipe } from './Pipes/time-stamp-to-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MedicineViewComponent } from './Components/medicine-view/medicine-view.component';
import { MedicineAddComponent } from './Components/medicine-add/medicine-add.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

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
    MedicineViewComponent,
    MedicineAddComponent,
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
    AngularFireModule.initializeApp(environment.firestoreConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
