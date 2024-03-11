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

  public showImage: boolean = false;
  public tenclick: number = 15;

  SHOW(){
    if(this.tenclick<=0){
      this.showImage=true;
    }
  }

  toggleImage() {
    this.tenclick = this.tenclick -1;
    this.SHOW();
  }
}