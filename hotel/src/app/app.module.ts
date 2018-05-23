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

import { MapaOcupacaoComponent, IonicMapaOcupacaoModule, MapaOcupacaoEdicaoComponent } from 'ionic-mapa-ocupacao-hotel-package'
import { IonicPodeModule, PodeComponent, IonicPodeProvider } from 'ionic-pode-component'
import { IonicUsuarioComponent, UsuarioEdicaoComponent, IonicUsuarioModule } from 'ionic-usuario-component';
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
    IonicMapaOcupacaoModule,
    IonicPodeModule,
    IonicUsuarioModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MapaOcupacaoComponent,
    MapaOcupacaoEdicaoComponent,
    WgContentComponent,
    PodeComponent,
    IonicUsuarioComponent,
    UsuarioEdicaoComponent
    // MapaOcupacaoComponent
    // MapaOcupacaoComponent, MapaOcupacaoEdicaoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicPodeProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // MapaOcupacaoProvider
  ]
})
export class AppModule { }
