import { Component } from '@angular/core';

import { IMapaOcupacao, mapaOcupadaData, clientesData } from '../mapa-ocupacao-data';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
/**
 * Generated class for the MapaOcupacaoEdicaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mapa-ocupacao-edicao',
  template: `<ion-grid>
  <ion-row>
      <ion-item col-12 col-md-12>
        <ion-label color="primary" stacked>Descrição</ion-label>
        <ion-textarea placeholder="Descrição" value="{{mapaItem.descricao}}"></ion-textarea>
      </ion-item>
      <ion-item col-6 col-md-6>
        <ion-label color="primary" stacked>Capacidade máxima</ion-label>
        <ion-input type="number" placeholder="Capacidade máxima" value="{{mapaItem.capacidadeMaxima}}"></ion-input>
      </ion-item>
      <ion-item col-2 col-md-2>
        <ion-label>Ocupado</ion-label>
        <ion-toggle checked="{{mapaItem.ocupado}}"></ion-toggle>
      </ion-item>
    <ion-grid lign-items-end>
      <ion-row >
        <button color="danger" ion-button (click)="cancelar()">Cancelar</button>
        <button color="primary" ion-button (click)="salvar()">Salvar</button>
      </ion-row>
    </ion-grid>
  </ion-row>
</ion-grid>`
})
export class MapaOcupacaoEdicaoComponent {

  mapaItem: IMapaOcupacao;

  constructor(public navParams: NavParams, public navCtrl: NavController, public toastCtrl: ToastController) {
    this.mapaItem = this.navParams.get('mapaItem');
  }
  cancelar() {
    this.navCtrl.pop();
  }
  salvar() {
    this.navCtrl.pop();
    let toast = this.toastCtrl.create({
      message: 'Item salvo com sucesso',
      duration: 3000
    });
    toast.present();
  }
}
