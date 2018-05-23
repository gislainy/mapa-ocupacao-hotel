
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioEdicaoComponent } from './usuario-edicao-component';

const HTML_TEMPLATE = `
<ion-content>
  <ion-list>
    <button ion-item *ngFor="let item of userList" (click)="abrirTelaDeEdicao($event, item)">
        <ion-icon ios="ios-contact" md="md-contact"></ion-icon>
      {{item.nome}}
    </button>
  </ion-list>
</ion-content>
`;

const CSS_STYLE = `
.special-text {
    font-weight: 800;
    font-size: 15pt;
    text-align: center;
    color: #0000FF;
}
`;

@Component({
  selector: 'usuario-component',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class IonicUsuarioComponent {
  private userList;
  constructor(public navCtrl: NavController) {
    this.userList = [
      {
        _id: 'userGislainyId',
        nome: 'Gislainy Crisostomo',
        email: 'gislainycrisostomo@gmail.com',
        roles: ["gerente"]
      },
      {
        _id: 'userJoseId',
        nome: 'Jose Augusto',
        email: 'joseneto.design@gmail.com',
        roles: ["administrador"]
      },
      {
        nome: 'Marcello Victor',
        _id: 'userMarcelloId',
        email: 'marcellovcs@gmail.com',
        roles: ["recepcao"]
      },
      {
        nome: 'Ramon Henrique',
        _id: 'userRamonId',
        email: 'ramonhenrique@gmail.com',
        roles: ["gerente", "financeiro"]
      },
    ]; 
  }
  abrirTelaDeEdicao(event, user) {
    this.navCtrl.push(UsuarioEdicaoComponent, {
      user
    })
  }
}

