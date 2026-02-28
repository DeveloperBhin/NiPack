// src/app/app.routes.ts
import { LandingComponent } from './app/landing/landing';

export const routes = [
  { path: '', component: LandingComponent }, // default landing
  { path: '**', redirectTo: '' },            // fallback
];