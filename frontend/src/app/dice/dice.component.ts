import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {

  constructor(private location: Location) {}

  ngOnInit(): void { this.openNewTab('https://giuseppebondii.github.io'); }

  openNewTab(newTabUrl: string): void { location.replace(newTabUrl); }
}
