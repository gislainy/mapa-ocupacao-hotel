import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { IonicMapaOcupacaoModule, MapaOcupacaoProvider } from 'ionic-mapa-ocupacao-hotel-package'
// import {AcademyComponent, AcademyProvider, IonicAcademyModule} from 'ionic-component-role';

import { AcademyComponent, IonicAcademyModule } from 'ionic-academy-package'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    // IonicMapaOcupacaoHotelModule,
    // MapaOcupacaoComponent,
    // IonicMapaOcupacaoModule,
    // IonicMapaOcupacaoHotelModule,
    IonicAcademyModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AcademyComponent
    // MapaOcupacaoComponent
    // MapaOcupacaoComponent, MapaOcupacaoEdicaoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // MapaOcupacaoProvider
  ]
})
export class AppModule { }
