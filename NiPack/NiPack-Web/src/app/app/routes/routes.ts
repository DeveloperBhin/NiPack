import { Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing';

export const appRoutes: Routes = [
  { path: '', component: LandingComponent },
    { path: '**', redirectTo: '' } // fallback route

  // Add other routes here
];

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';
// import { LandingComponent } from './app/landing/landing.component';
// import { appRoutes } from './app/app.routes';

// bootstrapApplication(LandingComponent, {
//   providers: [
//     provideRouter(appRoutes)
//   ]
// });