
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Registration } from './component/registration/registration';
import { Details } from './component/details/details';
import { Payment } from './component/payment/payment';
import { Marathon } from './component/marathon/marathon';
import { Events } from './component/events/events'
import { Conference } from './component/conference/conference';
import { Gallery } from './component/gallery/gallery';
// export const routes: Routes = [
//   {
//     path: '',
//     component: Home
//   },
  
//   { path: 'register/:id', component: Registration },
//   { path: 'details/:id', component: Details },
//   { path: 'payment/:id', component: Payment },
//   { path: 'marathon', component:Marathon},
//   { path: 'events',component:Events},
//   {path: 'conference', component : Conference },
//   { path: 'gallery', component : Gallery},
// { path: '**', redirectTo: '' }

// ]
export const routes: Routes = [

  // MAIN LAYOUT
  {
    path: '',
    loadComponent: () =>
      import('./modules/main-layout/main-layout')
        .then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./component/home/home')
            .then(m => m.Home)
      },
      {
        path: 'registration/:id',
        loadComponent: () =>
          import('./component/registration/registration')
            .then(m => m.Registration)
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./component/details/details')
            .then(m => m.Details)
      },
      {
        path: 'payment/:id',
        loadComponent: () =>
          import('./component/payment/payment')
            .then(m => m.Payment)
      },
      {
        path: 'events',
        loadComponent: () =>
          import('./component/events/events')
            .then(m => m.Events)
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./component/gallery/gallery')
            .then(m => m.Gallery)
      }
    ]
  },

  // MARATHON LAYOUT
  {
    path: 'marathon',
    loadComponent: () =>
      import('./modules/marathon-layout/marathon-layout')
        .then(m => m.MarathonLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./component/marathon/marathon')
            .then(m => m.Marathon)
      },
      {
        path: 'instructions',
        loadComponent: () =>
          import('./component/instructions/instructions')
            .then(m => m.Instructions)
      },
      {
        path: 'winners-details',
        loadComponent: () =>
          import('./component/winners-details/winners-details')
            .then(m => m.WinnersDetails)
      },
      {
        path: 'about-marathon',
        loadComponent: () =>
          import('./component/about-marathon/about-marathon')
            .then(m => m.AboutMarathon)
      }
    ]
  },

  // FALLBACK
  { path: '**', redirectTo: '' }

];

;