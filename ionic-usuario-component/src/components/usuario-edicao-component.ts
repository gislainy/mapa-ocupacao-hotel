import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

const HTML_TEMPLATE = `
<wg-content title="Mapa Ocupacao - Edição">
<ion-grid>
  <ion-row>
      <ion-item col-6 col-md-6>
        <ion-label color="primary" stacked>Nome</ion-label>
        <ion-input type="email" placeholder="Nome Input" value="{{user.nome}}"></ion-input>
      </ion-item>
      <ion-item col-6 col-md-6>
        <ion-label color="primary" stacked>Email</ion-label>
        <ion-input type="email" placeholder="Email Input" value="{{user.email}}"></ion-input>
      </ion-item>
    <ion-grid lign-items-end>
      <ion-row >
        <button color="secondary" ion-button (click)="cancelar()">Cancelar</button>
        <pode roles="administrador">
          <button color="danger" ion-button (click)="excluir()">Excluir</button>
          <button color="primary" ion-button (click)="salvar()">Salvar</button>
        </pode>
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
export class UsuarioEdicaoComponent {
  user;

  constructor(public navParams: NavParams, public navCtrl: NavController, public toastCtrl: ToastController) {
    this.user = this.navParams.get('user');
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