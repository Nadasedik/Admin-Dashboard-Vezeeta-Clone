import { EditAdminComponent } from './Components/admin/edit-admin/edit-admin.component';
import { ViewAllAdminComponent } from './Components/admin/view-all-admin/view-all-admin.component';
import { AddEditComponent } from './Components/admin/add-edit/add-edit.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './Components/guards/auth.guard';
import { SigninComponent } from './Components/signin/signin.component';
// import { SignupComponent } from './Components/signup/signup.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { AddUpdateDepartmentComponent } from './Components/add-update-department/add-update-department.component';
import { MedicineAddComponent } from './Components/medicine-add/medicine-add.component';
import { PatientsComponent } from './Components/Patients/Patients.component';
import { MedicineListComponent } from './Components/medicine-list/medicine-list.component';
import { MedicineEditComponent } from './Components/medicine-edit/medicine-edit.component';
import { AddEditDoctorComponent } from './Components/Doctors/Add-Edit-Doctor-component/add-edit-doctor/add-edit-doctor.component';
import { ViewAllDoctorsComponent } from './Components/Doctors/viewAllDoctors/view-all-doctors/view-all-doctors.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },

  {
    path: '',
    component: MainLayoutComponent,
    children: [

      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'Admin/add', component: AddEditComponent, canActivate: [AuthGuard]},
      { path: 'Admin/list', component:ViewAllAdminComponent, canActivate: [AuthGuard] },
      { path: 'Admin/edit/:id', component:EditAdminComponent, canActivate: [AuthGuard] },
      { path: 'medicine/list', component: MedicineListComponent, canActivate: [AuthGuard], },
      {
        path: 'medicine/add',
        component: MedicineAddComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'medicine/edit/:id',
        component: MedicineEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'departments',
        component: DepartmentsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'departments/add',
        component: AddUpdateDepartmentComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'departments/update/:id',
        component: AddUpdateDepartmentComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'patients',
        component: PatientsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'doctors/add',
        component: AddEditDoctorComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'doctors/list',
        component: ViewAllDoctorsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'doctors/update/:id',
        component: AddEditDoctorComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
