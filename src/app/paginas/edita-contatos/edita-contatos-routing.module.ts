import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaContatosPage } from './edita-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: EditaContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaContatosPageRoutingModule {}
