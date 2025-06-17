import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./Sidebar/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: 'clients',
    loadComponent: () => import('./Sidebar/clients').then(m => m.ClientsComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./Sidebar/projects').then(m => m.ProjectsComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./Sidebar/settings').then(m => m.SettingsComponent)
  }
];

