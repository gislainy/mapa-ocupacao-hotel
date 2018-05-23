import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicUsuarioComponent } from './components/usuario-component';
import { UsuarioEdicaoComponent } from './components/usuario-edicao-component';
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
        IonicUsuarioComponent,
        UsuarioEdicaoComponent,
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        IonicUsuarioComponent,
        UsuarioEdicaoComponent,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IonicUsuarioModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicUsuarioModule,
            providers: [AcademyProvider]
        };
    }
}
