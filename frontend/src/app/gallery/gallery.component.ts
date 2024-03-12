import { Component, ElementRef } from '@angular/core';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  immagini2023: string[] = [
    'assets/images/2023/immg1.jpg',
    'assets/images/2023/immg2.jpg',
    'assets/images/2023/immg3.jpg',
    'assets/images/2023/immg4.jpg',
    'assets/images/2023/immg5.jpg',
    'assets/images/2023/immg6.jpg',
    'assets/images/2023/immg7.jpg',
    'assets/images/2023/immg8.jpg',
    'assets/images/2023/immg9.jpg',
    'assets/images/2023/immg10.jpg',
    'assets/images/2023/immg11.jpg',
    'assets/images/2023/immg12.jpg',
    'assets/images/2023/immg13.jpg',
    'assets/images/2023/immg14.jpg',
    'assets/images/2023/immg15.jpg',
    'assets/images/2023/immg16.jpg',
    'assets/images/2023/immg17.jpg',
    'assets/images/2023/immg18.jpg',
    // Aggiungi percorsi per le tue altre immagini
  ];

  immagini2022: string[] = [
    'assets/images/2022/immg1.jpg',
    'assets/images/2022/immg2.jpg',
    'assets/images/2022/immg3.jpg',
    'assets/images/2022/immg4.jpg',
    'assets/images/2022/immg5.jpg',
    'assets/images/2022/immg6.jpg',
    'assets/images/2022/immg7.jpg',
    'assets/images/2022/immg8.jpg',
    'assets/images/2022/immg9.jpg',
    'assets/images/2022/immg10.jpg',
    'assets/images/2022/immg11.jpg',
    'assets/images/2022/immg12.jpg',
    'assets/images/2022/immg13.jpg',
    'assets/images/2022/immg14.jpg',
    'assets/images/2022/immg15.jpg',
    // Aggiungi percorsi per le tue altre immagini
  ];


  immagineSelezionata: string | null = null;
  indiceImmagineSelezionata: number | null = null;
  constructor(private el: ElementRef) {}

  apriImmagine(immagine: string, index: number) {
    this.immagineSelezionata = immagine;
    this.indiceImmagineSelezionata = index;
  }

  chiudiImmagine() {
    this.immagineSelezionata = null;
    this.indiceImmagineSelezionata = null;
  }

  navigaImmagine(delta: number, event: Event) {
    event.stopPropagation(); // Stop the click event from propagating

    if (this.indiceImmagineSelezionata !== null) {
      const newIndex = this.indiceImmagineSelezionata + delta;

      if (newIndex >= 0 && newIndex < this.immagini2023.length) {
        this.indiceImmagineSelezionata = newIndex;
        this.immagineSelezionata = this.immagini2023[newIndex];
      }
    }
}
visibleGalleries: { [key: string]: boolean } = {
  '2023': false,
  '2022': false
};

isGalleryVisible(edition: string): boolean {
  return this.visibleGalleries[edition];
}

toggleGalleryVisibility(edition: string): void {
  this.visibleGalleries[edition] = !this.visibleGalleries[edition];
}
isHovered: boolean = false;

  changeCursor(hovered: boolean) {
    this.isHovered = hovered;
  }
}
