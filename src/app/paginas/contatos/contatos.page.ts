import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ContatoService } from '../../servicos/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
contatos:any;

  constructor(private nav: NavController,
    private servico: ContatoService,
    private alerta: AlertController) { }

  ngOnInit() {
    console.log("Carregando a página...");
    console.log(this.servico.listar());

    this.servico.listar().subscribe(data => {
      this.contatos = data.map(e => {
        return {
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          email: e.payload.doc.data()['email'],
          telefone: e.payload.doc.data()['telefone']
        }
      })
      
      console.log(this.contatos);
    });
  }

  async excluir(contato){
    let msg = await this.alerta.create({
      header: "Atenção",
      subHeader: "",
      message: "Deseja excluir esse contato?",
      buttons: [
        {
          text: "Sim",
          handler: () => {
            console.log("Sim");
            this.servico.excluir(contato);
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
    this.nav.navigateForward("edita-contato");
  }
}
  


