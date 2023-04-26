import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getSlogan(): string { return 'UN\'AMICIZIA PER VIVERE, VIVERE PER UN\'AMICIZIA'; }

  getTitle(): string { return 'Campus by Night'; }

  getData(): string { return '10-11-12-13 maggio 2023'; }

  getDescription(): string {
    return `
      Il Campus By Night (CBN) è un evento organizzato dagli studenti
      dell’associazione studentesca “Student Office”
      dell’Alma Mater Studiorum – Università di Bologna,
      in collaborazione con The Crew. Tramite mostre e conferenze,
      lo scopo dell’evento è di portare all’intera comunità universitaria
      e ai cittadini di Bologna ciò che ci appassiona
      e ci affascina della vita e dello studio.<br>
      Ormai giunto alla sua XX edizione,
      quest’anno il CBN avrà come titolo “Un’amicizia per vivere,
      vivere per un’amicizia“ e si svolgerà dal 10 al 13 Maggio presso Piazza Scaravilli,
      nel cuore della zona universitaria bolognese.`
    ;
  }

}
