// import { NgModule, ModuleWithProviders } from '@angular/core';
// import { MapaOcupacaoComponent } from './components/mapa-ocupacao/mapa-ocupacao';
// import { MapaOcupacaoEdicaoComponent } from './components/mapa-ocupacao-edicao/mapa-ocupacao-edicao';
// import { MapaOcupacaoProvider } from './providers/mapa-ocupacao-provider'
// import { IonicModule } from 'ionic-angular';
 
// @NgModule({
//     imports: [
//         // Only if you use elements like ion-content, ion-xyz...
//         IonicModule
//     ],
//     declarations: [
//         // declare all components that your module uses
//         MapaOcupacaoComponent
//     ],
//     exports: [
//         // export the component(s) that you want others to be able to use
//         MapaOcupacaoComponent
//     ]
// })
// export class IonicAcademyModule {
//     static forRoot(): ModuleWithProviders {
//         return {
//             ngModule: IonicAcademyModule,
//             providers: [MapaOcupacaoProvider]
//         };
//     }
// }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { AcademyComponent } from './components/mapa-ocupacao/mapa-ocupacao';
import { MapaOcupacaoProvider } from './providers/mapa-ocupacao-provider'

import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        AcademyComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        AcademyComponent
    ]
})
export class IonicMapaOcupacaoModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicMapaOcupacaoModule,
            providers: [MapaOcupacaoProvider]
        };
    }
}