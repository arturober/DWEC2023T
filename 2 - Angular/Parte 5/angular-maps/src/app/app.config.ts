import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideBingmapsKey } from './bingmaps/bingmaps.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideBingmapsKey(
      'An8JNymYeoGzMUqXfVJlMm_9CLeMcpx_5NB0N1G9cUEUxIadv7XX5zVc008au1N1'
    ),
  ],
};
