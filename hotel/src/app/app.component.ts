import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import {  MapaOcupacaoComponent } from '../../../component/dist/index';

import { MapaOcupacaoComponent } from 'ionic-mapa-ocupacao-hotel-package'
import { IonicPodeProvider } from 'ionic-pode-component'

import { IonicUsuarioComponent  } from 'ionic-usuario-component';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public pode: IonicPodeProvider) {
    this.initializeApp();
    this.pode.setUsuarioId('userMarcelloId');
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Mapa Ocupacao', component: MapaOcupacaoComponent },
      { title: 'Usuario', component: IonicUsuarioComponent },
      // { title: 'Mapa Ocupacao', component: MapaOcupacaoComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
