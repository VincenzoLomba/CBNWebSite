import { Component } from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent {

  premi: Array<Prize> = [
    
  ]
}

class Prize {

  winningNumber: string;
  name: string;

  constructor(winningNumber: string, name: string) { this.winningNumber = winningNumber; this.name = name; }
}
