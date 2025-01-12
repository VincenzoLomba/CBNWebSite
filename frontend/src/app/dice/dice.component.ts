import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  imports: [MatProgressBarModule]
})
export class DiceComponent {

  constructor(private location: Location) {}

  ngOnInit(): void { this.openNewTab('https://giuseppebondii.github.io'); }

  openNewTab(newTabUrl: string): void { location.replace(newTabUrl); }
}
