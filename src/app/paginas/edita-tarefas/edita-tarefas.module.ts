import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaTarefasPageRoutingModule } from './edita-tarefas-routing.module';

import { EditaTarefasPage } from './edita-tarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaTarefasPageRoutingModule
  ],
  declarations: [EditaTarefasPage]
})
export class EditaTarefasPageModule {}
