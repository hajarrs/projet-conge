import { CanActivateService } from './security/can-activate.service';
import { EmployeListComponent } from './employes/employe-list/employe-list.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: 'employes', component: EmployeListComponent},//,canActivate: [CanActivateService] },
  { path: '', redirectTo: 'employes', pathMatch: 'full' }
];
