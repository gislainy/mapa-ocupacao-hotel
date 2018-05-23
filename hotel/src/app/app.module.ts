import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WgContentComponent } from '../components/wg-content/wg-content';
// import { IonicMapaOcupacaoModule, MapaOcupacaoProvider } from 'ionic-mapa-ocupacao-hotel-package'
// import {AcademyComponent, AcademyProvider, IonicAcademyModule} from 'ionic-component-role';

import { MapaOcupacaoComponent, IonicAcademyModule, MapaOcupacaoEdicaoComponent } from 'ionic-mapa-ocupacao-hotel-package'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WgContentComponent
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
    MapaOcupacaoComponent,
    MapaOcupacaoEdicaoComponent,
    WgContentComponent
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
