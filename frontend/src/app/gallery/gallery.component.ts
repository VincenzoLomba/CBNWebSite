import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  immagini: string[] = [
    'assets/images/immg1.jpg',
    'assets/images/immg2.jpg',
    'assets/images/immg3.jpg',
    // Aggiungi percorsi per le tue altre immagini
  ];

  immagineSelezionata: string | null = null;
  indiceImmagineSelezionata: number | null = null;
  buttonLeft: boolean | null = null;
  buttonRight: boolean | null = null;

  apriImmagine(immagine: string, index: number) {
    this.immagineSelezionata = immagine;
    this.indiceImmagineSelezionata = index;
  }

  chiudiImmagine() {
    if(!(this.buttonLeft && this.buttonRight)){
      this.immagineSelezionata = null;
      this.indiceImmagineSelezionata = null;
    }
  }

  navigaCarousel(delta: number) {
    if (this.immagineSelezionata !== null && this.indiceImmagineSelezionata !== null) {
      let newIndex = this.indiceImmagineSelezionata + delta;
      if (newIndex < 0) {
        newIndex = this.immagini.length - 1;  // Torna all'ultima immagine se si raggiunge il bordo sinistro
      } else if (newIndex >= this.immagini.length) {
        newIndex = 0;  // Torna alla prima immagine se si raggiunge il bordo destro
      }

      this.indiceImmagineSelezionata = newIndex;
      this.immagineSelezionata = this.immagini[newIndex];
    }
  }
}
