import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeeComponent } from './list-employee.component';


const appRoutes: Routes = [
      
        { path: '', component: ListEmployeeComponent },
        { path: 'create', component: CreateEmployeeComponent },
        { path: 'edit/:id', component: CreateEmployeeComponent },
      
    
  ];

@NgModule({
  imports: [ RouterModule.forChild(appRoutes) ],
  exports: [ RouterModule ]
})
export class EmployeeRoutingModule { }