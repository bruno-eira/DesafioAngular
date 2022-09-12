import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveComponent } from './reactive.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
  ]
})
export class ReactiveModule { }
