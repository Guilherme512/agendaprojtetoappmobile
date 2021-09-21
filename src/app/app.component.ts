import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private nav: NavController) {}

  irParaTarefas(){
    console.log("função tarefas");
    this.nav.navigateForward("tarefas");
  }
  irParaContatos(){
    console.log("função contatos");
    this.nav.navigateForward("contatos");
  }
  irParaEditaTarefas(){
    console.log("função edita-tarefas");
    this.nav.navigateForward("edita-tarefas");
  }
  irParaEditaContatos(){
    console.log("função edita-contatos");
    this.nav.navigateForward("edita-contatos");
  }
  irParaInicio(){
    console.log("função inicio");
    this.nav.navigateForward("inicio");
  }
}
