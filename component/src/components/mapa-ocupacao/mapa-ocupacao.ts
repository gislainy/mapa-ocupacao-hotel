import { Component } from '@angular/core';
import { IMapaOcupacao, mapaOcupadaData, clientesData } from '../mapa-ocupacao-data';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { MapaOcupacaoEdicaoComponent } from '../mapa-ocupacao-edicao/mapa-ocupacao-edicao';

/**
 * Generated class for the MapaOcupacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mapa-ocupacao',
  template: `
  <ion-grid>
  <ion-row>
    <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 *ngFor="let acomodacao of mapa">
      <ion-card (tap)="abrirEdicao(acomodacao)">
        <ion-card-content>
          <ion-card-title>
            {{acomodacao.descricao}}
            <ion-item>
              <ion-toggle checked="{{acomodacao.ocupado}}"></ion-toggle>
            </ion-item>
          </ion-card-title>
          <p>
            <strong>Capacidade  máxima: </strong>{{acomodacao.capacidadeMaxima}}
          </p>
          <p *ngFor="let cliente of acomodacao.clientesId">
              <ion-icon ios="ios-contact" md="md-contact"></ion-icon> {{nomeCliente(cliente)}}
          </p>
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>`
})
export class MapaOcupacaoComponent {
  mapa: Array<IMapaOcupacao> = mapaOcupadaData;
  constructor(public navCtrl: NavController) {

  }
  nomeCliente(clienteId: string) {
    return clientesData.filter(c => c.key == clienteId)[0].nome;
  }
  abrirEdicao(mapaItem: IMapaOcupacao) {
    this.navCtrl.push(MapaOcupacaoEdicaoComponent, {
      mapaItem
    });
  }
}
