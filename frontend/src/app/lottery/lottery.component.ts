import { Component } from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent {

  constructor() {}

  getPrizes(): Array<Prize> { return this.prizes; }

  prizes: Array<Prize> = [
    new Prize(
      '05564',
      'Scooter Kymco Agility 125cc'
    ),
    new Prize(
      '03659',
      'MacBook Air 13”'
    ),
    new Prize(
      '05864',
      'Soggiorno di 3 giorni presso Baja Hotels (Costa Smeralda, Sardegna)'
    ),
    new Prize(
      '06723',
      'Una settimana per due persone in Sicilia a Castellammare del Golfo (TP)'
    ),
    new Prize(
      '04462',
      'Credito dal valore di 300 euro utilizzabile per noleggio veicoli Corrente'
    ),
    new Prize(
      '06246',
      'Credito dal valore di 300 euro utilizzabile presso Fini Sport (Bologna)'
    ),
    new Prize(
      '07251',
      '1 notte più ingresso al Centro Termale per due persone presso Terme di Saint-Vincent (AO)'
    ),
    new Prize(
      '07372',
      'Abbonamento di 6 mesi presso Palestra Sinergy (Bologna)'
    ),
    new Prize(
      '07946',
      'Soggiorno due notti presso Agriturismo B&B Casa Matiki (Zminj, Croazia)'
    ),
    new Prize(
      '02519',
      'Box di vini offerti da Azienda Agricola Tre Monti'
    ),
    new Prize(
      '04656',
      'Ingresso per due persone presso una struttura QC Terme'
    ),
    new Prize(
      '09817',
      'Soggiorno di due notti per due persone offerto da Hotel Le Terrazze - Grottammare (AP)'
    ),
    new Prize(
      '00270',
      'Soggiorno di due notti per due persone in hotel della catena BeYou Hotels (Roma, Perugia, Rimini, Riccione)'
    ),
    new Prize(
      '04139',
      'Buono di 140 euro spendibile presso Stabilimenti Balneari Le Spiagge (Rimini)'
    ),
    new Prize(
      '02621',
      'Una notte per due, con aperitivo in Jacuzzi e colazione, presso Open Hotel (Rimini)'
    ),
    new Prize(
      '02659',
      'Una notte per due, con colazione presso Hotel Villa Rosa Riviera (Rimini)'
    ),
    new Prize(
      '05974',
      'Buono per ombrellone e lettini per 4 giorni presso Bagno Cesare 66 (Riccione)'
    ),
    new Prize(
      '01752',
      'Cena per due con menu degustazione presso Ristorante Ciacco (Bologna)'
    ),
    new Prize(
      '02947',
      'Buono di 100 euro presso Lella Piade (Rimini)'
    ),
    new Prize(
      '07318',
      'Una notte per due e aperitivo presso Hotel Erbavoglio (Rimini)'
    ),
    new Prize(
      '02034',
      'Carnet di 11 ingressi gratuiti da utilizzare presso Hyperspace (Bologna)'
    ),
    new Prize(
      '02836',
      'Buono cena o pranzo per due spendibile presso Agriturismo Freelandia (Rimini)'
    ),
    new Prize(
      '06552',
      'Cena per due persone ristorante Lampino (Acqualagna)'
    ),
    new Prize(
      '00243',
      'Cena per due persone presso Agriturismo Orto di Mari (Imola)'
    ),
    new Prize(
      '00200',
      'Cassa di 5 bottiglie di vino offerte da Cantina d’Isera'
    ),
    new Prize(
      '05134',
      'Cassa di 6 bottiglie di vino offerte da Azienda Agricola Tre Monti'
    ),
    new Prize(
      '06560',
      'Cassa di 6 bottiglie di vino offerte da VignaLucis'
    ),
    new Prize(
      '05993',
      'Cassa di 6 bottiglie di vino offerte da Azienda Agricola Degli Azzoni Avogadro Carradori'
    ),
    new Prize(
      '07703',
      'Percorso benessere di 3 ore per due persone presso Aquadirose Wellness Care (Rimini)'
    ),
    new Prize(
      '05512',
      'Buono di 54 euro spendibile presso Birrificio Vecchia Orsa'
    ),
    new Prize(
      '06019',
      'Buono di 50 euro spendibile presso Cantina Paltrinieri'
    ),
    new Prize(
      '06200',
      'Buono di 50 euro per noleggio veicoli Corrente'
    ),
    new Prize(
      '06197',
      'Cena per due persone presso Yomi Sushi (Bologna)'
    ),
    new Prize(
      '03106',
      'Cena per due persone presso Yomi Sushi (Bologna)'
    ),
    new Prize(
      '05106',
      'Buono di 500 euro spendibile presso Tosca Spose'
    ),
    new Prize(
      '06355',
      'Cesta di prodotti offerti da Azienda Dolciaria Babbi (Cesena)'
    ),
    new Prize(
      '04245',
      'Buono per Igiene Laser Parodontale presso Studio Dentistico Romeo (Bologna)'
    ),
    new Prize(
      '00407',
      'Buono di 50 euro spendibile presso Patron Buono Libreria Universitaria'
    ),
    new Prize(
      '02176',
      'Degustazione e visita guidata per due presso Birrificio Vecchia Orsa'
    ),
    new Prize(
      '06550',
      'Buono di 30 euro utilizzabile presso ristorante Scalinatella (Bologna)'
    ),
    new Prize(
      '03251',
      'Scatola di cioccolatini offerta da Roccati Cioccolato'
    ),
    new Prize(
      '06476',
      'Pranzo o cena per due persone presso Emporio Gastronomico (Rimini)'
    ),
    new Prize(
      '04123',
      'Buono da 50 euro spendibile presso Azienda Agricola Frontali (Rimini)'
    ),
    new Prize(
      '03196',
      'Cesta di prodotti offerti da Molino Benini (Ravenna)'
    ),
    new Prize(
      '01080',
      'Prodotto offerto da Blu Bologna'
    ),
    new Prize(
      '07904',
      'Kit di dermocosmesi offerta da Terme San Petronio'
    ),
    new Prize(
      '09787',
      'Set di shampoo e creme offerte da Farmacia del Borgo (Castel San Pietro)'
    ),
    new Prize(
      '06425',
      'Tris di creme spalmabili dal valore di 30 euro offerto da Azienda Dolciaria Babbi'
    ),
    new Prize(
      '06910',
      'Buono 40% di sconto su lenti oftalmiche presso Ottica Massarenti (Bologna)'
    ),
    new Prize(
      '04669',
      'Buono per 1 kg di gelato presso Gelateria Costa39 (Bologna)'
    ),
    new Prize(
      '01020',
      'Buono per 10 pizze presso Pizza Irnerio (Bologna)'
    ),
    new Prize(
      '00758',
      'Due cornici d’argento offerte da Gioielleria Serrazanetti (Bologna)'
    ),
    new Prize(
      '06933',
      'Buono da 5 pizze Pizza Irnerio (Bologna)'
    ),
    new Prize(
      '05244',
      'Set di collane Boutique Anita Calandrini'
    ),
    new Prize(
      '06948',
      'Pochette e portachiavi Pelletteria Campora'
    ),
    new Prize(
      '02439',
      'Pochette e portachiavi Pelletteria Campora'
    ),
    new Prize(
      '00034',
      'Portadocumenti e portachiavi Pelletteria Campora'
    ),
    new Prize(
      '01779',
      'Portachiavi Pelletteria Campora'
    ),
    new Prize(
      '04594',
      'Buono per 600 grammi di gelato offerto da LeccoLecco (Bologna)'
    ),
    new Prize(
      '00546',
      'Buono per 600 grammi di gelato offerto da LeccoLecco (Bologna)'
    ),
    new Prize(
      '01559',
      'Pranzo o cena omaggio presso Sfarinà (Bologna)'
    ),
    new Prize(
      '07803',
      'Aperitivo completo per due persone offerto da Caffetteria Neri (Bologna)'
    ),
    new Prize(
      '07682',
      'Set di portafogli offerti da Valigeria Cremonini (Bologna)'
    ),
    new Prize(
      '02653',
      'Buono presso Bar Maggiolino (Bologna)'
    ),
    new Prize(
      '06025',
      '10 colazioni omaggio Caffè degli Orefici (Bologna)'
    ),
    new Prize(
      '06624',
      'Mirabilandia 10 coupon con ingresso gratuito ogni due paganti'
    )  
  ];
}

class Prize {

  winningNumber: string;
  name: string;

  constructor(winningNumber: string, name: string) { this.winningNumber = winningNumber; this.name = name; }
}
