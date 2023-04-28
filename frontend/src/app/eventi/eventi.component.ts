import { Component } from '@angular/core';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.scss']
})
export class EventiComponent {

}

//giuro che questo che segue è l'unica cosa che ho chiesto a chat gpt, per capire com'è typescript

const eventi = document.querySelectorAll('.evento');

eventi.forEach((evento) => {
  const img = evento.querySelector('img');
  img.addEventListener('mouseover', () => {
    img.style.opacity = '0.7';
  });
  
  img.addEventListener('mouseout', () => {
    img.style.opacity = '1';
  });
});