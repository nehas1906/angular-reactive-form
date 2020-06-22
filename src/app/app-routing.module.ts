import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomPreloadingService } from './custom-preloading.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'employees',    data: { preload: true },loadChildren:  () => import('./employee/employee.module').then(m => m.EmployeeModule)} ,
  { path: '**', component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
