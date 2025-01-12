import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LotteryComponent } from './lottery/lottery.component';
import { ProgramComponent } from './program/program.component';
import { CateringComponent } from './catering/catering.component';
import { SportComponent } from './sport/sport.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DiceComponent } from './dice/dice.component';
import { env } from './app.env';

export const routes: Routes = [
  { path: env.routesPath.home, component: HomeComponent },
  { path: env.routesPath.lottery, component: LotteryComponent },
  { path: env.routesPath.program, component: ProgramComponent },
  { path: env.routesPath.catering, component: CateringComponent },
  { path: env.routesPath.sport, component: SportComponent },
  { path: env.routesPath.sponsors, component: SponsorComponent },
  { path: env.routesPath.gallery, component: GalleryComponent },
  { path: env.routesPath.dice, component: DiceComponent },
  { path: env.routesPath.cbnredirect, redirectTo: env.routesPath.lottery },
  { path: env.routesPath.none, redirectTo: env.routesPath.home, pathMatch: 'full' },
  { path: '**', redirectTo: env.routesPath.none }
];