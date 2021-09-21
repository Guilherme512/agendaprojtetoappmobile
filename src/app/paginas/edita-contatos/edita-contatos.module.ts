import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaContatosPageRoutingModule } from './edita-contatos-routing.module';

import { EditaContatosPage } from './edita-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaContatosPageRoutingModule
  ],
  declarations: [EditaContatosPage]
})
export class EditaContatosPageModule {}
