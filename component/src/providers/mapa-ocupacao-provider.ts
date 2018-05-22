import { Injectable } from '@angular/core';
import { mapaOcupadaData} from '../components/mapa-ocupacao-data'
import { IMapaOcupacao } from '../index';

@Injectable()
export class MapaOcupacaoProvider {
  reasonToJoin() {
    return 'The Ionic Academy helps you to learn everything Ionic!';
  }
  mapaOcupadaData(): Array<IMapaOcupacao> {
      return mapaOcupadaData
  }
}