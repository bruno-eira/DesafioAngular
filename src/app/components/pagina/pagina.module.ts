import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MoviesGridComponent } from '../movies-grid/movies-grid.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { PaginaComponent } from './pagina.component';

@NgModule({
  declarations: [
    PaginaComponent,
    MoviesGridComponent,
  ],
  imports: [
    CommonModule,
    PaginaRoutingModule,
    MatToolbarModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ]
})
export class PaginaModule { }
