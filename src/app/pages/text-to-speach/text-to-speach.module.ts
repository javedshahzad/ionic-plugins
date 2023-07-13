import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextToSpeachPageRoutingModule } from './text-to-speach-routing.module';

import { TextToSpeachPage } from './text-to-speach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextToSpeachPageRoutingModule
  ],
  declarations: [TextToSpeachPage]
})
export class TextToSpeachPageModule {}
