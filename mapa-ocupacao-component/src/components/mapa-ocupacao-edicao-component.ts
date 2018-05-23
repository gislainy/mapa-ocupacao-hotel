import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
 
const HTML_TEMPLATE = `
<wg-content title="Mapa Ocupacao - Edição">
<ion-grid>
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
        <button color="secondary" ion-button (click)="cancelar()">Cancelar</button>
        <pode roles="gerente">
          <button color="danger" ion-button (click)="excluir()">Excluir</button>
        </pode>
        <button color="primary" ion-button (click)="salvar()">Salvar</button>
      </ion-row>
    </ion-grid>
  </ion-row>
</ion-grid>

</wg-content>
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
  selector: 'mapa-ocupacao',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class MapaOcupacaoEdicaoComponent {
  mapaItem;

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
  excluir() {
    this.navCtrl.pop();
    let toast = this.toastCtrl.create({
      message: 'Esse item não pode ser excluido',
      duration: 3000
    });
    toast.present();
  }
}