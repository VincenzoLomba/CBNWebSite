import { Component, OnInit } from '@angular/core';
import { env } from './env';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

const dataStructure = new Map();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public pageLoaded: boolean = false;
  public sidenavIsOpen: boolean = false;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private dataService: DataService, private router: Router){};

  /*
   ["Programma", env.routesPath.program],
   ["CBN Half Court", env.routesPath.sport],
   ["Menu Ristorazione", env.routesPath.catering],
   ["Sponsors", env.routesPath.sponsors]
  ["Galleria", new SingleRoute(env.routesPath.gallery, 'photo')]
  */

   /* Icons database: https://fonts.google.com/icons */
  public mnRoutes: Map<string, SingleRoute> = new Map<string, SingleRoute>([
      ["Home & Mappa", new SingleRoute(env.routesPath.home,    'home')],
      ["Programma",    new SingleRoute(env.routesPath.program, 'today')],
      ["Menù",    new SingleRoute(env.routesPath.catering, 'lunch_dining')],
      ["Lotteria",     new SingleRoute(env.routesPath.lottery, 'confirmation_number')],
      ["Sponsors",     new SingleRoute(env.routesPath.sponsors, 'sensor_occupied')]
  ]);
  public mnIcons: Map<string, string> = new Map<string, string>([
    [env.routesPath.home, 'home'],
    [env.routesPath.lottery, 'confirmation_number'],
    [env.routesPath.gallery, 'photo']
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
  menuRoutes(): Map<string, SingleRoute> { return this.mnRoutes; }

  websiteBackgroundColor(): string { return ''; } // { return this.router.url === '/' + env.routesPath.program ? '#fff1d3' : ''; }

}

export class SingleRoute {
  link: string;
  icon: string;
  constructor(link: string, icon: string) { this.link = link; this.icon = icon; };
}