import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { applyPolyfills, defineCustomElements, addTheme } from 'corporate-ui-dev';
// import { theme as scania } from 'scania-theme';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// applyPolyfills().then(() => {
//   defineCustomElements(window);
//   addTheme(scania);
// });
