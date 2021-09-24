import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../servicos/contato.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edita-contatos',
  templateUrl: './edita-contatos.page.html',
  styleUrls: ['./edita-contatos.page.scss'],
})
export class EditaContatosPage implements OnInit {
nome: string;
email: string;
telefone: string;

  constructor(private service: ContatoService,
              private nav: NavController) { }

  ngOnInit() {
  }

  criar() {
    console.log("Função criar");
    console.log(this.nome);
    console.log(this.email);
    console.log(this.telefone);

    let contato = {}
    contato['nome'] = this.nome;
    contato['email'] = this.email;
    contato['telefone'] = this.telefone;
    console.log(contato);
    this.service.incluir(contato);
    this.nav.navigateForward("contatos");
   }
}
