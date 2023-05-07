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

/* Google Analytics */
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LotteryComponent } from './lottery/lottery.component';
import { ProgrammaComponent } from './programma/programma.component';
import { EventiComponent } from './eventi/eventi.component';
import { MostreComponent } from './mostre/mostre.component';
import { ProgramComponent } from './program/program.component';
import { SponsorComponent } from './sponsor/sponsor.component';

const appRoutes: Routes = [
  {path: env.routesPath.home, component: HomeComponent},
  {path: env.routesPath.lottery, component: LotteryComponent},
  {path: env.routesPath.program, component: ProgramComponent},
  {path: env.routesPath.sponsors, component: SponsorComponent},
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
    ProgrammaComponent,
    EventiComponent,
    MostreComponent,
    ProgramComponent,
    SponsorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true, onSameUrlNavigation: 'reload'}),
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule,
    NgxGoogleAnalyticsModule.forRoot('G-VP199SVJS3'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
