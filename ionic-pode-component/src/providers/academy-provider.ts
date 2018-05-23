import { Injectable } from '@angular/core';
import { global } from '../usuario';
@Injectable()
export class IonicPodeProvider {
  setUsuarioId(userId: string) {
    global.setUsuarioId(userId);
  }
}