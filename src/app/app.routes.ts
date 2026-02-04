import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';

import { LoginSuccessComponent } from './login/login-success.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'login-success', component: LoginSuccessComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'employees', component: EmployeesComponent, canActivate: [authGuard] },
    { path: 'add-employee', component: AddEmployeeComponent, canActivate: [authGuard] },
    { path: 'employee-details', component: EmployeeDetailsComponent, canActivate: [authGuard] },
];
