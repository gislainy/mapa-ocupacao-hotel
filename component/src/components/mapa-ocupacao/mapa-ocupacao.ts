// import { Component } from '@angular/core';
// import { IMapaOcupacao, mapaOcupadaData, clientesData } from '../mapa-ocupacao-data';
// import { NavController } from 'ionic-angular/navigation/nav-controller';
// // import { MapaOcupacaoEdicaoComponent } from '../mapa-ocupacao-edicao/mapa-ocupacao-edicao';

// /**
//  * Generated class for the MapaOcupacaoComponent component.
//  *
//  * See https://angular.io/api/core/Component for more info on Angular
//  * Components.
//  */
// @Component({
//   selector: 'mapa-ocupacao',
//   template: `
//   <ion-grid>
//   <ion-row>
//     <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 *ngFor="let acomodacao of mapa">
//       <ion-card (tap)="abrirEdicao(acomodacao)">
//         <ion-card-content>
//           <ion-card-title>
//             {{acomodacao.descricao}}
//             <ion-item>
//               <ion-toggle checked="{{acomodacao.ocupado}}"></ion-toggle>
//             </ion-item>
//           </ion-card-title>
//           <p>
//             <strong>Capacidade  máxima: </strong>{{acomodacao.capacidadeMaxima}}
//           </p>
//           <p *ngFor="let cliente of acomodacao.clientesId">
//               <ion-icon ios="ios-contact" md="md-contact"></ion-icon> {{nomeCliente(cliente)}}
//           </p>
//         </ion-card-content>
//       </ion-card>
//     </ion-col>
//   </ion-row>
// </ion-grid>`
// })
// export class MapaOcupacaoComponent {
//   mapa: Array<IMapaOcupacao> = mapaOcupadaData;
//   constructor(public navCtrl: NavController) {

//   }
//   nomeCliente(clienteId: string) {
//     return clientesData.filter(c => c.key == clienteId)[0].nome;
//   }
//   abrirEdicao(mapaItem: IMapaOcupacao) {
//     // this.navCtrl.push(MapaOcupacaoEdicaoComponent, {
//     //   mapaItem
//     // });
//   }
// }

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
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
</ion-grid>`;
 

 
@Component({
  selector: 'mapa-ocupacao',
  template: HTML_TEMPLATE,
})
export class MapaOcupacaoComponent {
  private mapa: [
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
  private clientesData = [
    {
      key: 'mariaId',
      nome: 'Maria do Santos Viera'
    },
    {
      key: 'joseId',
      nome: 'José Paulo Perreira'
    },
  ];
  constructor(public navCtrl: NavController) {

  }
  nomeCliente(clienteId: string) {
    return this.clientesData.filter(c => c.key == clienteId)[0].nome;
  }
  abrirEdicao() {
    // this.navCtrl.push(MapaOcupacaoEdicaoComponent, {
    //   mapaItem
    // });
  }
}

// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
 
// const HTML_TEMPLATE = `
// <ion-header>
//   <ion-navbar color="primary">
//     <ion-title>
//       Ionic Academy
//     </ion-title>
//   </ion-navbar>
// </ion-header>
 
// <ion-content padding>
 
// <div class="special-text">Welcome to the special Ionic Academy Module!</div>
//   <button ion-button full icon-left (click)="leavePage()">
//     <ion-icon name="close"></ion-icon>
//   Close the Page</button>
// </ion-content>
// `;
 
// const CSS_STYLE = `
// .special-text {
//     font-weight: 800;
//     font-size: 15pt;
//     text-align: center;
//     color: #0000FF;
// }
// `;
 
// @Component({
//   selector: 'academy-component',
//   template: HTML_TEMPLATE,
//   styles: [CSS_STYLE]
// })
// export class AcademyComponent {
//   constructor(private navCtrl: NavController) {}
 
//   leavePage() {
//       this.navCtrl.pop();
//   }
// }