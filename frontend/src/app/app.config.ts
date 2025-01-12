
/* Core Config Imports */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

/* Providers Imports */
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

/* Importing App Routes' Definition */
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
	provideZoneChangeDetection({ eventCoalescing: true }),
	provideRouter(routes),
	provideHttpClient()
  ]
};