import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideGoogleId } from './google-login/google-login.config';
import { provideFacebookId } from './facebook-login/facebook-login.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideGoogleId('1066792929235-fm57ku5qv4ncifl4fkvtdsb1j6jvmmsq.apps.googleusercontent.com'),
    provideFacebookId('361429733516733', 'v19.0'),
  ]
};
