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

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LotteryComponent } from './lottery/lottery.component';
import { ProgrammaComponent } from './programma/programma.component';
import { EventiComponent } from './eventi/eventi.component';
import { MostreComponent } from './mostre/mostre.component';

const appRoutes: Routes = [
  {path: env.routesPath.none, component: HomeComponent},
  {path: env.routesPath.lottery, component: LotteryComponent},
  {path: env.routesPath.cbnredirect, redirectTo: env.routesPath.lottery},
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
    MostreComponent
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
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
