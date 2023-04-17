import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { env } from './env';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from './services/data.service';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public pageLoaded: boolean = false;
  public sidenavIsOpen: boolean = false;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private dataService: DataService){};

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon( 'cbn', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/logo.svg') );
    this.pageLoaded = true;
  }
  data(): DataService { return this.dataService; }
  paths() { return env.routesPath; }
  toolbarHeight(): string { return env.toolbarHeight; }
  toolbarColor(): string { return env.toolbarColor; }
  toolbarElevation(): number { return env.toolbarElevation; }
  sideNavWidth(): string { return env.sideNavWidth; }

  menuButtonClicked(): void {
    console.log('hi');
    // document.getElementById("menuButton")?.classList.remove('focus');
  }

  goBack(event: any): void {
    event.target.focus();
    console.log('hi');
  }

}
