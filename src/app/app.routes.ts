
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    // Devuelve al component no page found cuando se escribe algo que pertenece a la ruta
    {path: '**', component: NoPageFoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
























