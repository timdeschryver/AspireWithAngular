import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideInstrumentation } from './otel-instrumentation';

export const appConfig: ApplicationConfig = {
  providers: [
    provideInstrumentation(),
    provideRouter(routes), 
    provideHttpClient()],
};
