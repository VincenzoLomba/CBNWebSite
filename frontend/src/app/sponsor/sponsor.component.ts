import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent {

  sponsors: Array<Sponsor> = [
    new Sponsor('../assets/sponsors/1.jpg', 'https://www.teddy.it/it/home/'),
    new Sponsor('../assets/sponsors/2.jpg', 'https://www.camplus.it/'),
    new Sponsor('../assets/sponsors/3.jpg', 'https://www.consorziagrariditalia.it/'),
    new Sponsor('../assets/sponsors/4.jpg', 'https://www.th-resorts.com/'),
    new Sponsor('../assets/sponsors/5.jpg', 'https://www.agri2000net.com/'),
    new Sponsor('../assets/sponsors/6.jpg', 'https://www.digiovannisrl.it/'),
    new Sponsor('../assets/sponsors/7.jpg', 'https://www.illumia.it/'),
    new Sponsor('../assets/sponsors/8.jpg', 'https://www.apisrl.com/'),
    new Sponsor('../assets/sponsors/9.jpg', 'https://nextsw.it/'),
    new Sponsor('../assets/sponsors/10.jpg', 'https://www.niering.it/'),
    new Sponsor('../assets/sponsors/11.jpg', 'https://www.reabilita.it/')
  ];

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
