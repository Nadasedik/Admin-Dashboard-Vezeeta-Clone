import { DepartmentsComponent } from './Components/departments/departments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateDepartmentComponent } from './Components/add-update-department/add-update-department.component';

const routes: Routes = [
  {path: "departments", component: DepartmentsComponent },
  {path: "departments/add", component: AddUpdateDepartmentComponent},
  {path:"departments/update/:id", component: AddUpdateDepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
