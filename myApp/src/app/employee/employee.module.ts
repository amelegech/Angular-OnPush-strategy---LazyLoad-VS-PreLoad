import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { Routes , RouterModule} from '@angular/router';
import { EmployeeDtailsComponent } from './employee-dtails.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpService } from './emp.service';


 const myRoutes:Routes =[
   {path:"employees", component:EmployeesComponent },
   {path:"employees/empDetails", component:EmployeeDtailsComponent },
 ]
@NgModule({
  declarations: [EmployeesComponent, EmployeeDtailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes),
    HttpClientModule,
    
  ],
  exports:[EmployeesComponent, EmployeeDtailsComponent],
  providers:[EmpService]
})
export class EmployeeModule { }
