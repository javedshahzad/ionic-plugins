import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoutubeVideoPage } from './youtube-video.page';

const routes: Routes = [
  {
    path: '',
    component: YoutubeVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeVideoPageRoutingModule {}
