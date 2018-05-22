import { NgModule, ModuleWithProviders } from '@angular/core';
import { MapaOcupacaoComponent } from './components/mapa-ocupacao-component';
import { MapaOcupacaoEdicaoComponent } from './components/mapa-ocupacao-edicao-component';
import { AcademyProvider } from './providers/academy-provider';
import { IonicModule } from 'ionic-angular';
 
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
export class IonicAcademyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicAcademyModule,
            providers: [AcademyProvider]
        };
    }
}
