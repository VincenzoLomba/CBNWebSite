import { Component } from '@angular/core';

@Component({
  selector: 'app-mostre',
  templateUrl: './mostre.component.html',
  styleUrls: ['./mostre.component.scss']
})
export class MostreComponent {

}

//giuro che questo che segue è l'unica cosa che ho chiesto a chat gpt, per capire com'è typescript

const eventi = document.querySelectorAll('.mostra');

eventi.forEach((mostra) => {
  const img = evento.querySelector('img');
  img.addEventListener('mouseover', () => {
    img.style.opacity = '0.7';
  });
  
  img.addEventListener('mouseout', () => {
    img.style.opacity = '1';
  });
});
