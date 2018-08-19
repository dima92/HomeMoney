//import { enableProdMode } from '@angular/core';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
//import { environment } from './environments/environment';

//if (environment.production) {
//  enableProdMode();
//}

//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.log(err));
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function autorizUrl() {
  return "http://localhost:1669/"; // debug
  //return "http://localhost:85/"; // server
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'AUTORIZ_URL', useFactory: autorizUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
