import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/pagina/pagina.module').then(mod => mod.PaginaModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./components/reactive/reactive.module').then(mod => mod.ReactiveModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
