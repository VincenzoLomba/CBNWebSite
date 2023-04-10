import { Component } from '@angular/core';
import { env } from './env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  toolbarHeight(): number { return env.toolbarHeight; }
}
