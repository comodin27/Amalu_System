import { Routes } from '@angular/router';

import { ListadoComponent } from './listado/listado.component';


export const ClientesRoutes: Routes = [
    {
    path: '',
    children: [ {
      path: 'listado',
      component: ListadoComponent
    }]}
];
