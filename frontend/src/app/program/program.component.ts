import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent{

  photoLoaded: boolean = false;

  ngAfterViewInit() {
    let top = document.getElementById('webtop');
    if (top !== null) top.scrollIntoView();
  }
}