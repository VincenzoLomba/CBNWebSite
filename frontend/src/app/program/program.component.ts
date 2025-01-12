import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  imports: [NgIf, FooterComponent, MatProgressBarModule]
})
export class ProgramComponent{

  photoLoaded: boolean = false;

  ngAfterViewInit() {
    let top = document.getElementById('webtop');
    if (top !== null) top.scrollIntoView();
  }
}