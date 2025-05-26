import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
     { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
];
