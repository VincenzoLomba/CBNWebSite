import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { env } from './env';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from './services/data.service';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

const dataStructure = new Map();

console.log(dataStructure);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public pageLoaded: boolean = false;
  public sidenavIsOpen: boolean = false;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private dataService: DataService, private router: Router){};

  public mnRoutes: Map<string, string> = new Map<string, string>([
      ["Home & Mappa", env.routesPath.home],
      /*
      ["Programma", env.routesPath.program],
      ["CBN Half Court", env.routesPath.sport],
      ["Menu Ristorazione", env.routesPath.catering],
      */
      ["Lotteria", env.routesPath.lottery]/*,
      ["Sponsors", env.routesPath.sponsors]
      */
  ]);
  
  public KEYandICON: Map<string, string> = new Map<string, string>([
    ["Home & Mappa", "home"],
    ["Lotteria", "casino"]
  ]);

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon('gmaps', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/gmapsicon.svg') );
    this.matIconRegistry.addSvgIcon('spotify', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/spotifyicon.svg') );
    this.pageLoaded = true;
  }

  data(): DataService { return this.dataService; }
  toolbarHeight(): string { return '56px'; }

  goToHomePage(): void { this.router.navigateByUrl(env.routesPath.home); }
  menuRoutesNames(): string[] { return Array.from(this.mnRoutes.keys()); }
  menuRoutes(): Map<string, string> { return this.mnRoutes; }
  getIcons(): string[] {return Array.from(this.KEYandICON.values());}

  websiteBackgroundColor(): string { return ''; } // { return this.router.url === '/' + env.routesPath.program ? '#fff1d3' : ''; }
}

