import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent {

  sponsors: Array<Sponsor> = [
    new Sponsor('../assets/sponsors/1.png', 'https://www.instantdeveloper.com/'),
    new Sponsor('../assets/sponsors/2.jpg', 'https://www.camplus.it/'),
    new Sponsor('../assets/sponsors/3.png', 'https://www.randstad.it/'),
    new Sponsor('../assets/sponsors/4.png', 'https://www.th-resorts.com/'),
    new Sponsor('../assets/sponsors/5.png', 'https://www.agri2000net.com/'),
    new Sponsor('../assets/sponsors/7.png', 'https://www.illumia.it/'),
    new Sponsor('../assets/sponsors/8.png', 'https://lipobank.it/'),
    new Sponsor('../assets/sponsors/9.png', 'https://www.miticohotel.it/'),
    new Sponsor('../assets/sponsors/10.png', 'https://www.unibeautyestetica.it/'),
    new Sponsor('../assets/sponsors/11.png', 'https://www.reabilita.it/'),
    new Sponsor('../assets/sponsors/12.png', 'https://www.yomax.it/'),
    new Sponsor('../assets/sponsors/13.png', 'https://www.nextsw.it')
  ];

  ngAfterViewInit() {
    let top = document.getElementById('webtop');
    if (top !== null) top.scrollIntoView();
  }
  
  getSponsors(): Array<Sponsor> { return this.sponsors; }
  sponsorsAreLoading(): boolean {
    return this.sponsors.find((el: Sponsor) => !el.loaded) != undefined;
  }
}

class Sponsor {
    
  loaded: boolean = false;
  source: string;
  url: string;

  constructor(source: string, url: string) { this.source = source; this.url = url; }
}
