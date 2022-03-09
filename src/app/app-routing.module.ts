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
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "medicine/list", component: MedicineListComponent },
  { path: "medicine/add", component: MedicineAddComponent },
  { path: "medicine/edit/:id", component: MedicineEditComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "departments/add", component: AddUpdateDepartmentComponent },
  { path: "departments/update/:id", component: AddUpdateDepartmentComponent },
  { path: "patients", component: PatientsComponent},
  {path: "patients/add", component: AddEditPatientsComponent},
  {path:"patients/edit/:id", component: AddEditPatientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
