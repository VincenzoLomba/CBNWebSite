import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FooterComponent } from '../footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss'],
  imports: [NgIf, MatProgressBarModule, FooterComponent]
})
export class CateringComponent {

  menuLoaded: boolean = false;
}