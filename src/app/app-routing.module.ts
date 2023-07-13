import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'barcode-scanner',
    loadChildren: () => import('./pages/barcode-scanner/barcode-scanner.module').then( m => m.BarcodeScannerPageModule)
  },
  {
    path: 'email-composer',
    loadChildren: () => import('./pages/email-composer/email-composer.module').then( m => m.EmailComposerPageModule)
  },
  {
    path: 'play-audio',
    loadChildren: () => import('./pages/play-audio/play-audio.module').then( m => m.PlayAudioPageModule)
  },
  {
    path: 'device-orientation',
    loadChildren: () => import('./pages/device-orientation/device-orientation.module').then( m => m.DeviceOrientationPageModule)
  },
  {
    path: 'ocr',
    loadChildren: () => import('./pages/ocr/ocr.module').then( m => m.OcrPageModule)
  },
  {
    path: 'text-to-speach',
    loadChildren: () => import('./pages/text-to-speach/text-to-speach.module').then( m => m.TextToSpeachPageModule)
  },
  {
    path: 'youtube-video',
    loadChildren: () => import('./pages/youtube-video/youtube-video.module').then( m => m.YoutubeVideoPageModule)
  },
  {
    path: 'clipboard',
    loadChildren: () => import('./pages/clipboard/clipboard.module').then( m => m.ClipboardPageModule)
  },
  {
    path: 'network-info',
    loadChildren: () => import('./pages/network-info/network-info.module').then( m => m.NetworkInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
