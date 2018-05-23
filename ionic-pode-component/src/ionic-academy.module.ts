import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PodeComponent } from './components/pode';
import { IonicPodeProvider } from './providers/academy-provider';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        PodeComponent,
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        PodeComponent,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IonicPodeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicPodeModule,
            providers: [IonicPodeProvider]
        };
    }
}
