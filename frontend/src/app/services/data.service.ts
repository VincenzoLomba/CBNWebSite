import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
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
      quest’anno il CBN avrà come titolo “` + this.getSlogan() + `“ e si svolgerà dal 9 all'11 maggio presso <b>Piazza San Domenico</b>.` // e dintorni,
      // nel cuore della zona universitaria bolognese.
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
    Scooter Kymco Agility 125cc	03776
    MacBook Air 13’’ con chip Apple M1, 8 GB di RAM e 256 GB di SSD	00707
    Soggiorno di una settimana @Castellammare del Golfo (TP)	06976
    Soggiorno di due notti (15-17/06) con colazione @Agriturismo tenuta il Cicalino, Massa Marittima (GR)	01743
    Credito dal valore di 300€ per noleggio autoveicoli @Corrente	07235
    Buono da 300€ spendibile per abito da cerimonia @Tosca spose	05449
    Tre anelli in argento fatti a mano, collezione ad-honorem offerti da @Beg oreficieria	02919
    Abbonamento di 6 mesi in palestra offerto da @Sinergy	05616
    Casco integrale HJC offerto da @Guelfa 76	02650
    Soggiorno di due notti presso "Locanda Alfieri", Termoli	02006
    Tre anelli in argento fatti a mano, collezione di Bologna offerti da @Beg oreficieria	07281
    Buono di 140 euro spendibile presso Stabilimenti Balneari Le Spiagge (Rimini)	06995
    Cena per due presso ristorante Gradale del Castello Monterone (Perugia)	02359
    Carnet di 11 ingressi gratuiti presso Hyperspace (Bologna)	04185
    Tre ingressi omaggio presso Acquario di Genova	07829
    Due ingressi spa per due persone presso Le Rose Suite hotel (Rimini)	00609
    Cena per due presso agriturismo "Orto di Mari" (Imola)	04599
    Buono per ombrellone e lettini per quattro giorni presso Bagno Cesare 66 (Riccione)	07415
    Due box di vini offerti da cantina Paltrinieri	02400
    Voucher da 70€ di degustazione per due presso "Azienda agricola Palazzo di Varignana" 	02032
    Kit Setern (tonico e siero viso) offerto da Terme San Petronio	07084
    Kit Vitabir (latte detergente e siero viso) offerto da Terme San Petronio	04617
    Escursione equestre per due persone presso "Centro Ippico Cavallo Maremma ASD" (Massa Marittima)	02314
    Aperitivo-degustazione per due presso Azienda Frontali (Rimini)	00316
    Set collant Trasparenze da donna offerto da "Nuova Virgiliana"	07215
    Box di 6 vini offerto da VignaEnaoli	00120
    Cesta di prodotti agricoli offerti da "Gruppo Grifo Agroalimentare" 	01078
    Cesta di prodotti agricoli offerti da "Gruppo Grifo Agroalimentare" 	06965
    Portafoglio offerto da Pelletteria Campora con set di cinture abbinato 	02760
    Portafoglio offerto da Pelletteria Campora con set di cinture abbinato 	07275
    Portafoglio offerto da Pelletteria Campora con set di cinture abbinato 	02678
    Kit di saponi e make up offerto da Farmacia Dal Contavalli	06546
    Kit di saponi e make up offerto da Farmacia Dal Contavalli	05251
    Kit di saponi e make up offerto da Farmacia Dal Contavalli	02914
    Credito dal valore di 50€ spendibile presso Spiller (Bologna)	03823
    Credito dal valore di 50€ presso libreria Tinarelli (Bologna)	04535
    Credito spendibile di 50€ per noleggio autoveicoli @Corrente	05728
    Credito spendibile di 50€ di workshop presso "Mastri Cartai e Dintorni" (Bologna)	03842
    Kit di dermocosmesi offerta da Terme San Petronio	07856
    Tre pasti gratuiti a fronte di almeno un pagante presso Yomi Sushi (Bologna)	02923
    Due salami da Luca Carni (Rimini)	05908
    Dieci colazioni omaggio presso Caffè dei Orefici (Bologna)	00435
    Tre barattoli di miele offerti da  Azienda Agricola Scurti	01754
    Due ingressi omaggio validi per l'intero complesso del Museo Nazionale Dell'Automobile	03731
    Visita per due persone presso Perugia sotterranea e presso Museo del Capitolo e della Cattedrale offerto da Isola San Lorenzo	01849
    Crediti di 30€ spendibili presso pizzeria Largo Respighi (Bologna)	00321
    Due penne biro offerte da Cartoleria Biagini	01889
    Orecchini fatti a mano da Xii BO Original Design Shop	00479
    Messa in piega presso "Donna Gio' studio" in via Mazzini, Bologna	07213
    Brunch del fine settimana offerto da Open Hotel, Rimini	01768
    Sacchettini di streghette da "Il Banco Del Pane" (Bologna)	01327
    Sacchettini di streghette da "Il Banco Del Pane" (Bologna)	07681
    Due biglietti omaggio per partita della squadra Zebre - rugby Parma il 17/05/24	02008
    Una bottiglia di vino offerta da cantina Michele Satta	03094
    Cesta di prodotti offerto da Molino Benini (Ravenna)	06538
    Aperitivo per due offerto da pasticceria Santo Stefano (Bologna)	06424
    Aperitivo per due (due calici e due piadine) offerto da BottegAmelia (Bologna)	00721
    10% di sconto dall'Osteria dell'Orsa (Bologna)	02038
    Ingresso omaggio per giornata co-working, Open Hotel, Rimini	01225
    Buono per mezzo kilo di gelato offerto da Cremeria Mascarella (Bologna)	07851
    Buono spesa di 10€ spendibile presso Sumo (Bologna)	01700
    50% di sconto per escape room presso "Secret Zone"	02796
    15% fino al 15 giugno presso Eticlò (Bologna)	07499
    Credito del valore di 10€ presso Alman cicli (Bologna)	06635
    20% di sconto da La bottega Mi Va (entro 30/06/2024)	03413
    Buono per degustazione per due di focacce da "La Slerfa Focacceria Genovese" (Bologna)	02381
    Buono per degustazione per due di focacce da "La Slerfa Focacceria Genovese" (Bologna)	00254
    Buono per degustazione per due di focacce da "La Slerfa Focacceria Genovese" (Bologna)	00311
    Tre catene da bici	07452
    Due spray coloranti per capelli e uno shampoo da parrucchieria	02481
    Buono spesa di 5€ spendibile da Sumo (Bologna)	07383
    Abito offerto da Oxigeno	06593
    `;
    return response.split('\n').filter(el => el.trim() != '').map(p => new Prize(p.split('	')[0].trim(), p.split('	')[1].trim()));
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
