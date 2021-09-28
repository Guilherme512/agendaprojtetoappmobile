import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../servicos/tarefa.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-edita-tarefas',
  templateUrl: './edita-tarefas.page.html',
  styleUrls: ['./edita-tarefas.page.scss'],
})
export class EditaTarefasPage implements OnInit {
  nome: string;
  descricao: string;

  constructor(private service: TarefaService,
              private  nav: NavController) { }

  ngOnInit() {
    
  }

  cadastrar() {
    console.log("Função cadastrar");
    console.log(this.nome);
    console.log(this.descricao);

    let tarefa = {}
    tarefa['nome'] = this.nome;
    tarefa['descricao'] = this.descricao;
    console.log(tarefa);
    this.service.incluir(tarefa);
    this.nav.navigateForward("tarefas");
   }
}
