
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaOcupacaoEdicaoComponent } from './mapa-ocupacao-edicao-component';
const HTML_TEMPLATE = `
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
</ion-grid>
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
  selector: 'mapa-ocupacao-edicao',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class MapaOcupacaoComponent {
  private mapa;
  private clientesData;
  constructor(public navCtrl: NavController) {
    this.mapa = [
      {
        descricao: "Quarto 1 - Com duas camas de solteiros",
        ocupado: true,
        capacidadeMaxima: 2,
        clientesId: [
          'mariaId',
          'joseId'
        ]
      },
      {
        descricao: "Quarto 2 - Com quatro camas de solteiros",
        ocupado: false,
        capacidadeMaxima: 4,
      },
      {
        descricao: "Quarto 3 - Com 1 cama de casal",
        ocupado: false,
        capacidadeMaxima: 2,
      },
      {
        descricao: "Quarto 4 - Com 2 camas de casais",
        ocupado: false,
        capacidadeMaxima: 4,
      }
    ];
    console.log('this.mapa', this.mapa)
    this.clientesData = [
      {
        key: 'mariaId',
        nome: 'Maria do Santos Viera'
      },
      {
        key: 'joseId',
        nome: 'José Paulo Perreira'
      },
    ];
    console.log('this.clientesData', this.clientesData)
  }
  nomeCliente(clienteId: string) {
    return this.clientesData.filter(c => c.key == clienteId)[0].nome;
  }
  abrirEdicao(mapaItem) {
    this.navCtrl.push(MapaOcupacaoEdicaoComponent, {
      mapaItem
    });
  }
}

