import { Component, OnInit } from '@angular/core';
import { DataService, Prize } from '../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss'],
  imports: [NgIf, NgFor, MatIcon, MatButtonModule, FooterComponent]
})
export class LotteryComponent {

  constructor(public dataService: DataService) {}

  ngAfterViewInit() {
    let top = document.getElementById('webtop');
    if (top !== null) top.scrollIntoView();
  }

  getPrizes(): Array<Prize> { return this.dataService.getPrizes(); }
}
