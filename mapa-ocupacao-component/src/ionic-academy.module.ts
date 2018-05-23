import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapaOcupacaoComponent } from './components/mapa-ocupacao-component';
import { MapaOcupacaoEdicaoComponent } from './components/mapa-ocupacao-edicao-component';
import { AcademyProvider } from './providers/academy-provider';
import { IonicModule } from 'ionic-angular';
import { IonicPodeModule } from 'ionic-pode-component'
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule,
        IonicPodeModule
    ],
    declarations: [
        // declare all components that your module uses
        MapaOcupacaoComponent,
        MapaOcupacaoEdicaoComponent,
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        MapaOcupacaoComponent,
        MapaOcupacaoEdicaoComponent,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IonicMapaOcupacaoModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicMapaOcupacaoModule,
            providers: [AcademyProvider]
        };
    }
}
