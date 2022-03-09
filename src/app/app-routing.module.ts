import { AuthGuard } from './Components/guards/auth.guard';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { AddUpdateDepartmentComponent } from './Components/add-update-department/add-update-department.component';
import { MedicineAddComponent } from './Components/medicine-add/medicine-add.component';


import { PatientsComponent } from './Components/Patients/Patients.component';
import { AddEditPatientsComponent } from './Components/AddEditPatients/AddEditPatients.component';

import { MedicineListComponent } from './Components/medicine-list/medicine-list.component';
import { MedicineEditComponent } from './Components/medicine-edit/medicine-edit.component';



const routes: Routes = [
  { path: "", redirectTo: "/signup", pathMatch: "full" },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },

  {
    path: "", component: MainLayoutComponent, children: [

      { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
      { path: "dashboard", component: DashboardComponent},
      { path: "medicine/list", component: MedicineListComponent, canActivate: [AuthGuard] },
      { path: "medicine/add", component: MedicineAddComponent, canActivate: [AuthGuard] },
      { path: "medicine/edit/:id", component: MedicineEditComponent, canActivate: [AuthGuard] },
      { path: "departments", component: DepartmentsComponent, canActivate: [AuthGuard] },
      { path: "departments/add", component: AddUpdateDepartmentComponent, canActivate: [AuthGuard] },
      { path: "departments/update/:id", component: AddUpdateDepartmentComponent, canActivate: [AuthGuard] },
      { path: "patients", component: PatientsComponent, canActivate: [AuthGuard] },
      { path: "patients/add", component: AddEditPatientsComponent, canActivate: [AuthGuard] },
      { path: "patients/edit/:id", component: AddEditPatientsComponent, canActivate: [AuthGuard] },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
