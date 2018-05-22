import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
 
const HTML_TEMPLATE = `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>

    <ion-title>{{title}}</ion-title>

    <ion-buttons end title="Sair">
      <button ion-button icon-only (tap)="sair()">
        <ion-icon name="exit"></ion-icon>
      </button>
    </ion-buttons>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <ng-content></ng-content>
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
  selector: 'wg-content',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class WgContentComponent {
  constructor() {
  }
  sair() {
    
  }
  @Input() title: string
}