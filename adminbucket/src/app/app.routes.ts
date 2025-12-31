import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component'


const initialRoute = () => {
    return true;
};

const appRoutes: Routes = [
    {
        path: '', component: LoginComponent,
    },
    {
        path: 'login', component: LoginComponent,
    },
    {
        path: 'home', loadChildren: './container/home/home.module#HomeModule',
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });
