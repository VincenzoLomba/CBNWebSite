import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
  imports: [NgIf, NgFor, MatProgressBar, NgClass, FooterComponent]
})
export class SportComponent {

  photoLoaded: boolean = false;
  constructor(public dataService: DataService){}
  public data(): DataService { return this.dataService; }

}
