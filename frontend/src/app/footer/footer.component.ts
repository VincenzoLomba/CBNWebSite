import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public showImage: boolean = false;
  public tenclick: number = 15;

  SHOW(){
    if(this.tenclick==0){
      this.showImage=true;
    }
  }

  toggleImage() {
    this.tenclick = this.tenclick -1;
    this.SHOW();
  }
}
