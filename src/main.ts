import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { appModule } from './app/appModule'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))  
   