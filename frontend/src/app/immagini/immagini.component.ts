import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-images',
  templateUrl: './immagini.component.html',
  styleUrls: ['./immagini.component.scss'],
})
export class ImagesComponent {
  images: Image[] = [
    { src: './assets/images/immg1.jpg', alt: 'Image 1' },
    { src: './assets/images/immg2.jpg', alt: 'Image 2' },
    { src: './assets/images/immg3.jpg', alt: 'Image 3' }
    // Aggiungi altre immagini secondo necessità
  ];

  lightboxImages: any[] = [];

  constructor(private lightbox: Lightbox) {
    this.lightboxImages = this.images.map((img) => ({
      src: img.src,
      caption: img.alt,
      thumb: img.src, // Aggiungi questa linea
    }));
  }

  openImage(image: any): void {
    this.lightbox.open(this.lightboxImages, this.lightboxImages.indexOf(image));
  }
}
