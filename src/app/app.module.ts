import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Native plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { TextToSpeechAdvanced } from '@ionic-native/text-to-speech-advanced/ngx';
import { DeviceOrientation } from '@ionic-native/device-orientation/ngx';
import { OCR } from '@ionic-native/ocr/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Network } from '@ionic-native/network/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: 
  [
    BarcodeScanner,
    EmailComposer,
    Media,
    File,
    TextToSpeechAdvanced,
    DeviceOrientation,
    OCR,
    Clipboard,
    YoutubeVideoPlayer,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
