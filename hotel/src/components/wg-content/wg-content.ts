
import { Component, Input } from '@angular/core';

/**
 * Generated class for the UContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wg-content',
  templateUrl: 'wg-content.html'
})
export class WgContentComponent {

  constructor() {
  }
  sair() {
    
  }

  @Input() title: string

}