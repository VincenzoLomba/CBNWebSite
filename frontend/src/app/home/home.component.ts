import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { env } from '../env';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private dataService: DataService) {};

  public data(): DataService { return this.dataService; }
  public blackLayerPercentage(): number { return 0.4; }

  public sloganSize(): string {
    return '36px';
  }
}
