import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';

import { ListadoComponent } from './listado/listado.component';
import { ClientesRoutes } from './clientes.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ],
  declarations: [
      ListadoComponent
  ]
})

export class ClientesModule {}
