import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { BookReducer } from '../../../../libs/src/lib/store/store/book.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideStore({ book: BookReducer })],
};
