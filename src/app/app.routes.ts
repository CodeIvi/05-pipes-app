import { Routes } from '@angular/router';


export const routes: Routes = [

    {
        path: 'basic',
        title: 'Pipes Básicos',
        loadComponent: () => import('./pages/basic-pages/basic-pages'),
    },

    {
        path: 'numbers',
        title: 'Number Pipe',
        loadComponent: () => import('./pages/number-page/number-page'),
    },
    {
        path: 'uncommon',
        title: 'Pipes no comunes',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
    },

    {
        path: 'custom',
        title: 'Pipes personalizados',
        loadComponent: () => import('./pages/custom-page/custom-page'),
    },

    {
        path: '**',
        redirectTo: 'basic'

    }
];
