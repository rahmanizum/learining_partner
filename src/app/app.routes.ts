import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'master',
    pathMatch: 'full'
}, {
    path: 'master',
    loadComponent : () => import('./components/master/master.component').then(m => m.MasterComponent)
}];
