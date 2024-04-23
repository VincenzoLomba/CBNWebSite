import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getTitle(): string { return 'Campus by Night'; }

  getShort(): string { return 'CBN 2024'; }

  getSlogan(): string { return 'In che cosa posso sperare?'; }

  getDateAndPlace(): string { return '09-10-11<br>maggio 2024<br>Bologna'; }

  getDescription(): string {
    return `
      Il Campus By Night (CBN) è un evento organizzato dagli studenti
      dell’associazione studentesca “Student Office”
      dell’Alma Mater Studiorum Università di Bologna,
      in collaborazione con The Crew. Tramite mostre e conferenze,
      lo scopo dell’evento è di portare all’intera comunità universitaria
      e ai cittadini di Bologna ciò che ci appassiona
      e ci affascina della vita e dello studio.<br>
      Ormai giunto alla sua XXII edizione,
      quest’anno il CBN avrà come titolo “` + this.getSlogan() + `“ e si svolgerà dal 9 all'11 maggio presso <b>Piazza Scaravilli</b> e dintorni,
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

  getPrizes(): Array<Prize> {
    let response = `
    Scooter Kymco Agility 125cc
    MacBook Air 13
    Soggiorno di una settimana @Castellammare del Golfo (TP)
    Soggiorno di due notti (15-17/06) con colazione @Agriturismo tenuta il Cicalino, Massa Marittima (GR)
    Credito dal valore di 300€ per noleggio autoveicoli @corrente
    Buono da 300€ spendibile per abito da cerimonia @Tosca spose
    Tre anelli in argento fatti a mano, collezione ad-honorem offerti da @Beg oreficieria
    Abbonamento di 6 mesi in palestra offerto da @sinergy
    Casco integrale HJC offerto da @Guelfa 76
    Soggiorno di due notti presso "Locanda Alfieri", Termoli
    Tre anelli in argento fatti a mano, collezione di Bologna offerti da @Beg oreficieria
    Prosciutto crudo di Parma azienda fratelli Beretta
    Buono di 140 euro spendibile presso Stabilimenti Balneari Le Spiagge (Rimini)
    Cena per due presso ristorante Gradale del Castello Monterone (Perugia)
    Carnet di 11 ingressi gratuiti presso Hyperspace (Bologna)
    Box di vini offerto da Azienda Agricola Tre Monti
    Box di vini offerto da Azienda Agricola Tre Monti
    Due ingressi omaggio presso Puppy Yoga
    Tre ingressi omaggio presso Acquario di Genova
    Due ingressi spa per due persone presso Le Rose Suite hotel di Rimini
    Cena per due presso agriturismo "Orto di Mari" (Imola)
    Buono per ombrellone e lettini per quattro giorni presso Bagno Cesare 66 (Riccione)
    Ingresso omaggio per dieci persone presso Fiabilandia
    Set collant Trasparenze da donna offerto da "Nuova Virgiliana"
    Kit Setern (tonico e siero viso) offerto da Terme San Petronio
    Voucher da 70€ di degustazione per due presso "Azienda agricola Palazzo di Varignana"
    Kit Vitabir (latte detergente e siero viso) offerto da Terme San Petronio
    Portafoglio offerto da Pelletteria Campora con set di cinture abbinato
    Portafoglio offerto da Pelletteria Campora con set di cinture abbinato
    Portafoglio offerto da Pelletteria Campora con set di cinture abbinato
    Escursione equestre per due persone presso "Centro Ippico Cavallo Maremma ASD" (Massa Marittima)
    Box di vini offerti da cantina Paltrinieri
    Box di vini offerti da cantina Paltrinieri
    Aperitivo-degustazione per due presso Azienda Frontali
    Box di 6 vini offerto da VignaLucis
    Cesta di prodotti agricoli offerti da "Gruppo Grifo Agroalimentare"
    Cesta di prodotti agricoli offerti da "Gruppo Grifo Agroalimentare"
    Cesta di prodotti agricoli offerti da "Gruppo Grifo Agroalimentare"
    Kit di saponi e make up offerto da Farmacia Dal Contavalli
    Kit di saponi e make up offerto da Farmacia Dal Contavalli
    Kit di saponi e make up offerto da Farmacia Dal Contavalli
    Credito dal valore di 50€ spendibile presso Spiller
    Credito dal valore di 50€ presso libreria Tinarelli
    Credito spendibile di 50€ per noleggio autoveicoli @Corrente
    Credito spendibile di 50€ di workshop presso "Mastri Cartai e dintorni"
    Kit di dermocosmesi offerta da Terme San Petronio
    Tre pasti gratuiti a fronte di almeno un pagante presso Yomi Sushi
    Due salami da Luca Carni
    Dieci colazioni omaggio presso Caffè dei Orefici (Bologna)
    Tre barattoli di miele offerti da Azienda Agricola Scurti
    Due ingressi omaggio validi per l'intero complesso del Museo Nazionale Dell'Automobile
    Crediti di 30€ spendibili presso pizzeria Largo Respighi
    Due biro offerte da Cartoleria Biagini
    Orecchini fatti a mano da Xii BO Original Design Shop
    Messa in piega presso "Donna Gio' studio" in via Mazzini
    Brunch del fine settimana offerto da Open Hotel, Rimini
    Sacchettini di streghette da "Il banco del pane"
    Sacchettini di streghette da "Il banco del pane"
    Due biglietti omaggio per partita della squadra Zebre - rugby Parma il 17/05/24
    Una bottiglia di vino offerta da cantina Michele Satta
    Cesta di prodotti offerto da Molino Benini (Ravenna)
    Aperitivo per due offerto da pasticceria Santo Stefano
    Aperitivo per due (due calici e due piadine) offerto da BottegAmelia
    10% di sconto dall'Osteria dell'orsa
    Ingresso omaggio per giornata co-working, Open Hotel, Rimini
    Buono per mezzo kilo di gelato offerto da Cremoria Mascarella
    Buono spesa di 10€ spendibile presso Sumo
    50% di sconto per escape room presso "Secret Zone"
    Eticlò 15% fino al 15 giugno
    Credito del valore di 10€ presso Alman cicli
    20% di sconto da La bottega Mi Va (entro 30/06/2024)
    Buono per degustazione per due di focacce da "La Slerfa Focacceria Genovese"
    Buono per degustazione per due di focacce da "La Slerfa Focacceria Genovese"
    Buono per degustazione per due di focacce da "La Slerfa Focacceria Genovese"
    Tre catenacci da bici
    Due spray coloranti per capelli e uno shampoo da parrucchieria
    Buono spesa di 5€ spendibile da Sumo
    Abito offerto da Oxigeno
    `;
    return response.split('\n').filter(el => el.trim() != '').map(p => new Prize(null, p.trim()));
  }
}

class Rule {
  name: string;
  body: string;
  constructor(name: string, body: string) { this.name = name; this.body = body; }
}

export class Prize {
  winningNumber: string | null;
  name: string;
  constructor(winningNumber: string | null, name: string) { this.winningNumber = winningNumber; this.name = name; }
}
