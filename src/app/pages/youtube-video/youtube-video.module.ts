import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoutubeVideoPageRoutingModule } from './youtube-video-routing.module';

import { YoutubeVideoPage } from './youtube-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoutubeVideoPageRoutingModule
  ],
  declarations: [YoutubeVideoPage]
})
export class YoutubeVideoPageModule {}
