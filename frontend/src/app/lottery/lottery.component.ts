import { Component, OnInit } from '@angular/core';
import { DataService, Prize } from '../services/data.service';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent {

  constructor(public dataService: DataService) {}

  ngAfterViewInit() {
    let top = document.getElementById('webtop');
    if (top !== null) top.scrollIntoView();
  }

  getPrizes(): Array<Prize> { return this.dataService.getPrizes(); }
}
