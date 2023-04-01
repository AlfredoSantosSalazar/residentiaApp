import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'generate-qr',
    loadComponent: () => import('./generate-qr/generate-qr.page').then( m => m.GenerateQRPage)
  },
  {
    path: 'scan-qr',
    loadComponent: () => import('./scan-qr/scan-qr.page').then( m => m.ScanQRPage)
  },
  {
    path: 'send-notification',
    loadComponent: () => import('./send-notification/send-notification.page').then( m => m.SendNotificationPage)
  },
  {
    path: 'whatsapp',
    loadComponent: () => import('./whatsapp/whatsapp.page').then( m => m.WhatsappPage)
  },
];
