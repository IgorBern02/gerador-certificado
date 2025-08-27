import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  ...appConfig, // espalha a configuração existente
  providers: [provideHttpClient(), provideRouter(routes)],
}).catch((err) => console.error(err));
