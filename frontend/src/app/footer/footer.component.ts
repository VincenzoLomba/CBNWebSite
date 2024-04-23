import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public showEasterEggImage: boolean = false;
  public remainingClicks: number = 15;
  
  toggleImage() {
    this.remainingClicks = this.remainingClicks -1;
    if(this.remainingClicks==0) this.showEasterEggImage = true;
  }
}
