import { Component } from '@angular/core';
import { DataService, Prize } from '../services/data.service';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent {

  constructor(public dataService: DataService) {}

  getPrizes(): Array<Prize> { return this.dataService.getPrizes(); }

}