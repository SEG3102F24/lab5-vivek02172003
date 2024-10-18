import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'; 
import { getFirestore, provideFirestore } from '@angular/fire/firestore'; 
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';  // Import Analytics
import { environment } from '../environments/environment';  // Use environment (development/production)

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    
    provideFirestore(() => getFirestore()),
    
    provideAnalytics(() => getAnalytics())
  ]
};
