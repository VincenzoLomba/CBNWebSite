import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getTitle(): string { return 'Campus by Night'; }

  getShort(): string { return 'CBN 2023'; }

  getSlogan(): string { return 'UN\'AMICIZIA PER VIVERE,<br>VIVERE PER UN\'AMICIZIA'; }

  getDateAndPlace(): string { return '10-11-12-13<br>maggio 2023<br>Bologna'; }

  getDescription(): string {
    return `
      Il Campus By Night (CBN) è un evento organizzato dagli studenti
      dell’associazione studentesca “Student Office”
      dell’Alma Mater Studiorum Università di Bologna,
      in collaborazione con The Crew. Tramite mostre e conferenze,
      lo scopo dell’evento è di portare all’intera comunità universitaria
      e ai cittadini di Bologna ciò che ci appassiona
      e ci affascina della vita e dello studio.<br>
      Ormai giunto alla sua XX edizione,
      quest’anno il CBN avrà come titolo “Un’amicizia per vivere,
      vivere per un’amicizia“ e si svolgerà dal 10 al 13 maggio presso <b>Piazza Scaravilli</b> e dintorni,
      nel cuore della zona universitaria bolognese.`
    ;
  }

  getSportAreaTitle(): string { return 'Regolamento del torneo'; }

  getSportRoolBook(): Array<Rule> {
    const response: Array<Rule> = [
      new Rule(
        'Possesso palla',
        `Per decidere quale squadra ha il possesso iniziale un componente per ciascuna squadra tira, il primo che realizza permetterà alla sua squadra di iniziare in attacco la partita.<br>
        Ogni tiro realizzato dentro l’arco vale 1 punto. Ogni tiro realizzato da dietro l’arco vale 2 punti. Ogni tiro libero segnato vale 1 punto.<br>
        Il tempo di gioco regolamentare è di 10 minuti. Il cronometro si ferma durante le situazioni di palla morta o tiro libero.<br>
        La prima squadra che segna 21 punti vince la gara, nel caso in cui ciò avvenga prima della fine del tempo regolamentare.<br>
        Questa regola si applica esclusivamente al tempo regolamentare (non in un potenziale tempo supplementare).<br>
        Se il punteggio è in parità alla fine del tempo regolamentare, si gioca un tempo supplementare dopo un intervallo di un minuto. La prima squadra a segnare due punti nel supplementare vince la gara.`
      ),
      new Rule(
        'Falli/Tiri Liberi',
        `Una squadra esaurisce il bonus dopo aver commesso 6 falli.<br>
        I falli commessi durante un atto di tiro dentro l’arco sono puniti con un tiro libero, mentre quelli commessi oltre l’arco sono puniti con due tiri liberi.<br>
        Falli commessi durante l’atto di tiro e seguiti da un canestro realizzato, sono puniti con un tiro libero aggiuntivo. <br>
        I falli di squadra n.7,8 e 9 sono sempre puniti con due tiri liberi. Dal decimo in poi, ogni fallo è punito con due tiri liberi e possesso di palla.<br>
        Tutti i falli tecnici sono puniti con un tiro libero e possesso di palla, mentre i falli antisportivi sono puniti con due tiri liberi e possesso. Il gioco riprende con uno scambio di palla fuori dall’arco dopo un fallo tecnico o un antisportivo.<br> 
        Nota: nessun tiro libero è assegnato a seguito di un fallo in attacco.
        `
      ),
      new Rule(
        'Come si gioca la palla',
        `Qualora la squadra in attacco prenda il rimbalzo, può continuare ad attaccare il canestro senza far uscire il pallone dall’arco.<br>
        Qualora la squadra in difesa prenda il rimbalzo, deve portare il pallone oltre l’arco passando o palleggiando, non c’è uscita libera quindi la squadra avversaria può rubare la palla ma è comunque costretta a uscire dall’arco.<br> 
        Qualora la squadra in difesa rubi o stoppi il pallone, deve riportarlo oltre l’arco prima di poter attaccare.<br>
        Ogni possesso palla di entrambe le squadre, susseguente ad una qualunque situazione di palla morta, deve cominciare con un check, cioè con la consegna del pallone (tra difensore e attaccante) dietro l’arco e in posizione centrale.<br>
        In caso di palla contesa, il possesso è della squadra in difesa.
        `
      ),
      new Rule(
        'Time Out',
        `Ogni squadra può chiamare un time-out a gara. Può essere chiamato da qualsiasi giocatore in situazione di palla morta.<br>
        Tutti i time-out hanno una durata di 30 secondi.<br>
        Nota: time-out e sostituzioni possono essere chiamati esclusivamente in situazioni di palla morta.
        `
      )
    ];
    return response;
  }

}

class Rule {

  name: string;
  body: string;

  constructor(name: string, body: string) { this.name = name; this.body = body; }
}
