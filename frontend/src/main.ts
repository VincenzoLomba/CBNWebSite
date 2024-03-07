import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatIcon } from '@angular/material/icon';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
