import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateDepartmentComponent } from './Components/add-update-department/add-update-department.component';
import { MedicineAddComponent } from './Components/medicine-add/medicine-add.component';
import { MedicineViewComponent } from './Components/medicine-view/medicine-view.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "medicine/add", component: MedicineAddComponent },
  { path: "medicine/view", component: MedicineViewComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "departments/add", component: AddUpdateDepartmentComponent },
  { path: "departments/update/:id", component: AddUpdateDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
