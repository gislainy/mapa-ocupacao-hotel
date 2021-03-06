import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private userList;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    // this.navCtrl.push(, {
    //   user
    // })
  }
}
