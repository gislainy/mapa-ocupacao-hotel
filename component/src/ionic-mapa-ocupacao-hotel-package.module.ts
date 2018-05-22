import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MapaOcupacaoComponent } from './components/mapa-ocupacao/mapa-ocupacao';
import { MapaOcupacaoEdicaoComponent } from './components/mapa-ocupacao-edicao/mapa-ocupacao-edicao';
import { MapaOcupacaoProvider } from './providers/mapa-ocupacao-provider'
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        MapaOcupacaoComponent,
        MapaOcupacaoEdicaoComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        MapaOcupacaoComponent,
        MapaOcupacaoEdicaoComponent
    ]
})
export class IonicMapaOcupacaoHotelModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicMapaOcupacaoHotelModule,
            providers: [MapaOcupacaoProvider]
        };
    }
}