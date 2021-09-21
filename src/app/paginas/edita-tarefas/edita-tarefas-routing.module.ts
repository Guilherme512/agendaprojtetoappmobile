import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaTarefasPage } from './edita-tarefas.page';

const routes: Routes = [
  {
    path: '',
    component: EditaTarefasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaTarefasPageRoutingModule {}
