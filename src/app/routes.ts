import { EmployeListComponent } from './employes/employe-list/employe-list.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: 'employes', component: EmployeListComponent },
  { path: '', redirectTo: 'employes', pathMatch: 'full' }
];
