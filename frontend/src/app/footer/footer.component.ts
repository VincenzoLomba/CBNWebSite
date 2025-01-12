import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [NgIf]
})
export class FooterComponent {

  public showEasterEggImage: boolean = false;
  public remainingClicks: number = 15;
  @Input('patronages') patronages: boolean = false;
  
  withPatronages(): boolean { return this.patronages; }

  toggleImage() {
    this.remainingClicks = this.remainingClicks -1;
    if(this.remainingClicks==0) this.showEasterEggImage = true;
  }
}
