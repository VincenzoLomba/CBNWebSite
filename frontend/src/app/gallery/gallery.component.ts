
import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [NgIf, NgFor, FooterComponent]
})
export class GalleryComponent {

  path2023: string = 'assets/images/2023/';

  immagini2023: string[] = [
    this.path2023 + 'video_serata.mp4',
    this.path2023 + 'immg2.jpg',
    this.path2023 + 'immg1.jpg',
    this.path2023 + 'DSCF5385.jpg',
    this.path2023 + 'IMG_0486.JPG',
    this.path2023 + 'IMG_9051.jpg',
    this.path2023 + 'IMG_9063.jpg',
    this.path2023 + 'immg10.jpg',
    this.path2023 + 'immg16.jpg',
    this.path2023 + 'immg5.jpg',
    this.path2023 + 'DSCF5999.JPG',
    this.path2023 + 'IMG_9012.JPG',
    this.path2023 + 'IMG_9052.jpg',
    this.path2023 + 'IMG_9064.jpg',
    this.path2023 + 'immg11.jpg',
    this.path2023 + 'immg17.jpg',
    this.path2023 + 'immg6.jpg',
    this.path2023 + 'DSCF6029.jpg',
    this.path2023 + 'IMG_9013.jpg',
    this.path2023 + 'IMG_9053.JPG',
    this.path2023 + 'IMG_9065.jpg',
    this.path2023 + 'immg12.jpg',
    this.path2023 + 'immg18.jpg',
    //this.path2023 + 'immg7.jpg',
    this.path2023 + 'DSCF6250.jpg',
    this.path2023 + 'IMG_9014.jpg',
    this.path2023 + 'IMG_9054.JPG',
    this.path2023 + 'IMG_9066.jpg',
    this.path2023 + 'immg13.jpg',
    //this.path2023 + 'immg8.jpg',
    this.path2023 + 'DSCF6312.jpg',
    this.path2023 + 'IMG_9048.jpg',
    this.path2023 + 'IMG_9055.jpg',
    this.path2023 + 'IMG_9643.jpg',
    this.path2023 + 'immg14.jpg',
    this.path2023 + 'immg3.jpg',
    //this.path2023 + 'immg9.jpg',
    this.path2023 + 'DSCF6726.jpg',
    this.path2023 + 'IMG_9050.jpg',
    this.path2023 + 'IMG_9058.jpg',
    this.path2023 + 'immg15.jpg',
    this.path2023 + 'immg4.jpg',
  ];
  isVideoSelected: boolean = false;

  path2022: string = 'assets/images/2022/';

  immagini2022: string[] = [
    this.path2022 + 'DSC_0462.jpg',
    this.path2022 + 'DSC_0553.jpg',
    this.path2022 + 'DSC_0774.JPG',
    this.path2022 + 'DSC_0943.JPG',
    this.path2022 + 'DSC_0995.jpg',
    this.path2022 + 'DSC_1114-2.jpg',
    this.path2022 + 'DSC_1278.jpg',
    this.path2022 + 'DSC_1291.JPG',
    this.path2022 + 'DSC_1482 2.JPG',
    this.path2022 + 'FOTO 1.JPG',
    this.path2022 + 'FOTO 5.JPG',
    this.path2022 + 'IMG_1115.PNG',
    this.path2022 + 'IMG_1116.PNG',
    this.path2022 + 'IMG_2110.JPG',
    this.path2022 + 'IMG_2776.JPG',
    this.path2022 + 'IMG_2802.JPG',
    this.path2022 + 'P1050785.JPG',
    this.path2022 + 'P1051017.JPG',
    this.path2022 + 'P1051037.JPG',
    this.path2022 + 'P1051129.JPG',
    this.path2022 + 'P1051154.JPG',
    this.path2022 + 'P1051207.JPG',
    this.path2022 + 'P1051225.JPG',
    this.path2022 + 'P1051374.JPG',
    this.path2022 + 'P1051391.jpg',
    this.path2022 + 'P1051444.jpg',
    this.path2022 + 'P1051473.jpg',
    this.path2022 + 'P1062440.jpg',
    this.path2022 + 'P1062488.JPG',
    this.path2022 + 'P1063583.JPG',
    this.path2022 + 'P1063590.JPG',
    this.path2022 + 'P1063604.JPG',
    this.path2022 + 'P1063936.jpg',
    this.path2022 + 'P1064209.jpg',
    this.path2022 + 'P1064252.JPG',
    this.path2022 + 'P1064325.JPG',
    this.path2022 + 'P1064589.JPG',
    this.path2022 + 'P1064591.jpg',
    this.path2022 + 'P1064698.JPG',
    this.path2022 + 'immg1.jpg',
    this.path2022 + 'immg10.jpg',
    this.path2022 + 'immg11.jpg',
    this.path2022 + 'immg12.jpg',
    this.path2022 + 'immg13.jpg',
    this.path2022 + 'immg2.jpg',
    this.path2022 + 'immg3.jpg',
    this.path2022 + 'immg4.jpg',
    this.path2022 + 'immg5.jpg',
    this.path2022 + 'immg6.jpg',
    this.path2022 + 'immg7.jpg',
    this.path2022 + 'immg8.jpg',
    this.path2022 + 'immg9.jpg',

    // Aggiungi percorsi per le tue altre immagini
  ];

  path2021: string = 'assets/images/2021/';
  immagini2021: string[] = [
    //this.path2021+'IMG_1117.PNG',
    this.path2021 + 'IMG_9067.JPG',
    this.path2021 + 'IMG_9068.JPG',
    this.path2021 + 'IMG_9069.JPG',
  ];

  visibleGalleries: {
    [key: string]: {
      visible: boolean;
      selectedImage: string | null;
      selectedIndex: number | null;
    };
  } = {
    '2023': { visible: false, selectedImage: null, selectedIndex: null },
    '2022': { visible: false, selectedImage: null, selectedIndex: null },
    '2021': { visible: false, selectedImage: null, selectedIndex: null },
  };

  apriImmagine(edition: string, immagine: string, index: number) {
    this.visibleGalleries[edition].selectedImage = immagine;
    this.visibleGalleries[edition].selectedIndex = index;
    // Controlla se l'elemento selezionato è un video
    this.isVideoSelected = immagine.endsWith('.mp4');
  }
  

  navigaImmagine(edition: string, delta: number, event: Event) {
    event.stopPropagation();
    const gallery = this.visibleGalleries[edition];
    if (gallery.selectedIndex !== null) {
      const images =
        edition === '2023'
          ? this.immagini2023
          : edition === '2022'
            ? this.immagini2022
            : this.immagini2021;
      const newIndex = gallery.selectedIndex + delta;
      if (newIndex >= 0 && newIndex < images.length) {
        gallery.selectedIndex = newIndex;
        gallery.selectedImage = images[newIndex];
        this.isVideoSelected = images[newIndex].endsWith('.mp4');
      }
    }
  }

  toggleGalleryVisibility(edition: string): void {
    const gallery = this.visibleGalleries[edition];
    gallery.visible = !gallery.visible;
  }

  isGalleryVisible(edition: string): boolean {
    return this.visibleGalleries[edition].visible;
  }

  isLeftNavigationEnabled(edition: string): boolean {
    const gallery = this.visibleGalleries[edition];
    return gallery.selectedIndex !== null && gallery.selectedIndex > 0;
  }

  isRightNavigationEnabled(edition: string): boolean {
    const gallery = this.visibleGalleries[edition];
    const images = edition === '2023' ? this.immagini2023 : this.immagini2022;
    return (
      gallery.selectedIndex !== null &&
      gallery.selectedIndex < images.length - 1
    );
  }

  closeOverlay(edition: string): void {
    this.visibleGalleries[edition].selectedImage = null;
    this.visibleGalleries[edition].selectedIndex = null;
  }

}