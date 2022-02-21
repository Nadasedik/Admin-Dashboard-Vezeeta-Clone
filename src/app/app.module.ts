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
@NgModule({
  declarations: [
    AppComponent,
    AddEditDoctorComponent,
    ViewAllDoctorsComponent,
    NavbarCompComponent,
    SideNavbarCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,

    AngularFireModule.initializeApp(environment.firestoreConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
