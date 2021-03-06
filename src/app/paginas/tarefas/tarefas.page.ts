import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { TarefaService } from '../../servicos/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {
  tarefas:any; 

  constructor(private nav: NavController,
              private servico: TarefaService,
              private alerta: AlertController) { }

  ngOnInit() {
    console.log("Carregando a página...");
    console.log(this.servico.listar());

    this.servico.listar().subscribe(data => {
      this.tarefas = data.map(e => {
        return {
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          descricao: e.payload.doc.data()['descricao']
        }
      })
      
      console.log(this.tarefas);
    });
  }

  async excluir(tarefa){
    let msg = await this.alerta.create({
      header: "Atenção",
      subHeader: "",
      message: "Deseja excluir essa tarefa?",
      buttons: [
        {
          text: "Sim",
          handler: () => {
            console.log("Sim");
            this.servico.excluir(tarefa);
          }
        }, 
        {
          text: "Não",
          handler:() => {
            console.log("Não"); 
          }
        }]
    });

    await msg.present();
  }

  inicioCadastro(){
    this.nav.navigateForward("edita-tarefas");
  }
}
