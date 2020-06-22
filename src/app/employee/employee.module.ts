import { NgModule } from '@angular/core';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeeComponent } from './list-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
   
    EmployeeRoutingModule,
    SharedModule
  ],
  declarations: [
    CreateEmployeeComponent,
    ListEmployeeComponent
  ]
  
  //  exports: [
  //   CreateEmployeeComponent,
  //   ReactiveFormsModule
  // ]
})
export class EmployeeModule { }
