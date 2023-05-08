import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent {

  photoLoaded: boolean = false;

  constructor(public dataService: DataService){}

  public data(): DataService { return this.dataService; }

}
