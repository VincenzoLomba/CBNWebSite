// immagini.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-immagini',
  templateUrl: './immagini.component.html',
  styleUrls: ['./immagini.component.scss']
})
export class ImmaginiComponent {
  immagini: string[] = [
    'assets/images/img_1.JPG',
    'assets/images/img_2.JPG',
    'assets/images/img_3.JPG',
    // Aggiungi gli altri percorsi delle tue immagini
  ];

  immagineSelezionata: string | null = null;

  apriImmagine(immagine: string) {
    this.immagineSelezionata = immagine;
  }

  chiudiImmagine() {
    this.immagineSelezionata = null;
  }
}
