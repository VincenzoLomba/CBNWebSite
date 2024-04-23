import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { env } from './env';

/* Angular Material */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

/* Google Analytics */
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LotteryComponent } from './lottery/lottery.component';
import { ProgramComponent } from './program/program.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SportComponent } from './sport/sport.component';
import { CateringComponent } from './catering/catering.component';
import { GalleryComponent } from './gallery/gallery.component';
const appRoutes: Routes = [
  {path: env.routesPath.home, component: HomeComponent},
  {path: env.routesPath.lottery, component: LotteryComponent},
  {path: env.routesPath.program, component: ProgramComponent},
  {path: env.routesPath.catering, component: CateringComponent},
  {path: env.routesPath.sport, component: SportComponent},
  {path: env.routesPath.sponsors, component: SponsorComponent},
  {path: env.routesPath.gallery, component: GalleryComponent},
  {path: env.routesPath.cbnredirect, redirectTo: env.routesPath.lottery},
  {path: env.routesPath.none, redirectTo: env.routesPath.home, pathMatch: 'full'},
  {path: '**', redirectTo: env.routesPath.none}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LotteryComponent,
    ProgramComponent,
    SponsorComponent,
    SportComponent,
    CateringComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true, onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'}),
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule,
    NgxGoogleAnalyticsModule.forRoot('G-VP199SVJS3'),
    NgxGoogleAnalyticsRouterModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
