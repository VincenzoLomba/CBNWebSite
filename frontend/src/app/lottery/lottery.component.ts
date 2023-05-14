import { Component } from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent {
  // TODO: add leading zeros s.t. every ticket has 5 numbers
  premi: Array<Premio> = [
    new Premio('Scooter Kymco Agility 125cc', '5564'), 
    new Premio('MacBook Air 13”', '3659'), 
    new Premio('Soggiorno di 3 giorni presso Baja Hotels (Costa Smeralda, Sardegna)', '5864'), 
    new Premio('Una settimana per due persone in Sicilia a Castellammare del Golfo (TP)', '6723'), 
    new Premio('Credito dal valore di 300 euro utilizzabile per noleggio veicoli Corrente ', '4462'), 
    new Premio('Credito dal valore di 300 euro utilizzabile presso Fini Sport (Bologna)', '6246'), 
    new Premio('1 notte più ingresso al Centro Termale per due persone presso Terme di Saint-Vincent (AO)', '7251'), 
    new Premio('Abbonamento di 6 mesi presso Palestra Sinergy (Bologna)', '7372'), 
    new Premio('Soggiorno due notti presso Agriturismo B&B Casa Matiki (Zminj, Croazia)', '7946'), 
    new Premio('Box di vini offerti da Azienda Agricola Tre Monti', '2519'), 
    new Premio('Ingresso per due persone presso una struttura QC Terme', '4656'), 
    new Premio('Soggiorno di due notti per due persone offerto da Hotel Le Terrazze - Grottammare (AP) ', '9817'), 
    new Premio('Soggiorno di due notti per due persone in hotel della catena BeYou Hotels (Roma, Perugia, Rimini, Riccione)', '270'), 
    new Premio('Buono di 140 euro spendibile presso Stabilimenti Balneari Le Spiagge (Rimini)', '4139'), 
    new Premio('Una notte per due, con aperitivo in Jacuzzi e colazione, presso Open Hotel (Rimini)', '2621'), 
    new Premio('Una notte per due, con colazione presso Hotel Villa Rosa Riviera (Rimini) ', '2659'), 
    new Premio('Buono per ombrellone e lettini per 4 giorni presso Bagno Cesare 66 (Riccione)', '5974'), 
    new Premio('Cena per due con menu degustazione presso Ristorante Ciacco (Bologna)', '1752'), 
    new Premio('Buono di 100 euro presso Lella Piade (Rimini)', '2947'), 
    new Premio('Una notte per due e aperitivo presso Hotel Erbavoglio (Rimini) ', '7318'), 
    new Premio('Carnet di 11 ingressi gratuiti da utilizzare presso Hyperspace (Bologna)', '2034'), 
    new Premio('Buono cena o pranzo per due spendibile presso Agriturismo Freelandia (Rimini)', '2836'), 
    new Premio('Cena per due persone ristorante Lampino (Acqualagna)', '6552'), 
    new Premio('Cena per due persone presso Agriturismo Orto di Mari (Imola)', '243'), 
    new Premio('Cassa di 5 bottiglie di vino offerte da Cantina d’Isera', '200'), 
    new Premio('Cassa di 6 bottiglie di vino offerte da Azienda Agricola Tre Monti', '5134'), 
    new Premio('Cassa di 6 bottiglie di vino offerte da Azienda Agricola Tre Monti', '6560'), 
    new Premio('Cassa di 6 bottiglie di vino offerte da Azienda Agricola Degli Azzoni Avogadro Carradori', '5993'), 
    new Premio('Percorso benessere di 3 ore per due persone presso Aquadirose Wellness Care (Rimini)', '7703'), 
    new Premio('Buono di 54 euro spendibile presso Birrificio Vecchia Orsa ', '5512'), 
    new Premio('Buono di 50 euro spendibile presso Cantina Paltrinieri', '6019'), 
    new Premio('Buono di 50 euro per noleggio veicoli Corrente', '6200'), 
    new Premio('Cena per due persone presso Yomi Sushi (Bologna)', '6197'), 
    new Premio('Cena per due persone presso Yomi Sushi (Bologna)', '3106'), 
    new Premio('Buono di 500 euro spendibile presso Tosca Spose', '5106'), 
    new Premio('Cesta di prodotti offerti da Azienda Dolciaria Babbi (Cesena) ', '6355'), 
    new Premio('Buono per Igiene Laser Parodontale presso Studio Dentistico Romeo (Bologna)', '4245'), 
    new Premio('Buono di 50 euro spendibile presso Patron Buono Libreria Universitaria', '407'), 
    new Premio('Degustazione e visita guidata per due presso Birrificio Vecchia Orsa ', '2176'), 
    new Premio('Buono di 30 euro utilizzabile presso ristorante Scalinatella (Bologna)', '6550'), 
    new Premio('Scatola di cioccolatini offerta da Roccati Cioccolato', '3251'), 
    new Premio('Pranzo o cena per due persone presso Emporio Gastronomico (Rimini)', '6476'), 
    new Premio('Buono da 50 euro spendibile presso Azienda Agricola Frontali (Rimini)', '4123'), 
    new Premio('Cesta di prodotti offerti da Molino Benini (Ravenna)', '3196'), 
    new Premio('Prodotto offerto da Blu Bologna', '1080'), 
    new Premio('Kit di dermocosmesi offerta da Terme San Petronio', '7904'), 
    new Premio('Set di shampoo e creme offerte da Farmacia del Borgo (Castel San Pietro) ', '9787'), 
    new Premio('Tris di creme spalmabili dal valore di 30 euro offerto da Azienda Dolciaria Babbi', '6425'), 
    new Premio('Buono 40% di sconto su lenti oftalmiche presso Ottica Massarenti (Bologna)', '6910'), 
    new Premio('Buono per 1 kg di gelato presso Gelateria Costa39 (Bologna)', '4669'), 
    new Premio('Buono per 10 pizze presso Pizza Irnerio (Bologna)', '1020'), 
    new Premio('Due cornici d’argento offerte da Gioielleria Serrazanetti (Bologna)', '758'), 
    new Premio('Buono da 5 pizze Pizza Irnerio (Bologna)', '6933'), 
    new Premio('Set di collane Boutique Anita Calandrini', '5244'), 
    new Premio('Pochette e portachiavi Pelletteria Campora', '6948'), 
    new Premio('Pochette e portachiavi Pelletteria Campora', '2439'), 
    new Premio('Portadocumenti e portachiavi Pelletteria Campora', '34'), 
    new Premio('Portachiavi Pelletteria Campora', '1779'), 
    new Premio('Buono per 600 grammi di gelato offerto da LeccoLecco (Bologna)', '4594'), 
    new Premio('Buono per 600 grammi di gelato offerto da LeccoLecco (Bologna)', '546'), 
    new Premio('Pranzo o cena omaggio presso Sfarinà (Bologna)', '1559'), 
    new Premio('Aperitivo completo per due persone offerto da Caffetteria Neri (Bologna) ', '7803'), 
    new Premio('Set di portafogli offerti da Valigeria Cremonini (Bologna)', '7682'), 
    new Premio('Buono presso Bar Maggiolino (Bologna)', '2653'), 
    new Premio('10 colazioni omaggio Caffè degli Orefici (Bologna)', '6025'), 
    new Premio('Mirabilandia 10 coupon con ingresso gratuito ogni due paganti', '6624'), 
  ]
}

class Premio {

  loaded: boolean = false;
  name: string;
  winning_ticket: string;

  constructor(name: string, winning_ticket: string) { this.name = name; this.winning_ticket = winning_ticket; }
}
