import { Component, OnInit } from '@angular/core';
import { TTSOptions, TextToSpeechAdvanced } from '@ionic-native/text-to-speech-advanced/ngx';
import { RangeCustomEvent } from '@ionic/angular';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-text-to-speach',
  templateUrl: './text-to-speach.page.html',
  styleUrls: ['./text-to-speach.page.scss'],
})
export class TextToSpeachPage implements OnInit {
  SpeedRate:any=20;
  SpeachText:any='';
  Speaching:boolean=true;
  Actrate: any;
  constructor(
    private tts: TextToSpeechAdvanced,
    private appConfig:AppConfigService
  ) { }

  ngOnInit() {
    this.Actrate=this.SpeedRate/100;
    this.tts.getVoices().then((response)=>{
      console.log(response,"results")
    }).catch(err=>{
      console.log(err)
    })
  }
  onIonChange(ev: Event) {
    this.SpeedRate = (ev as RangeCustomEvent).detail.value;
    console.log(this.SpeedRate)
    this.Actrate=this.SpeedRate/100;
  }
  startSpeach(){
    if(this.SpeachText){
      this.Speaching=false;
      const option:TTSOptions={
        text:this.SpeachText,
        locale:"en-US",
        rate:this.Actrate,
        identifier: 'com.apple.ttsbundle.Samantha-compact',
      }
      this.tts.speak(option)
    .then((res) =>{
      this.Speaching=true;
       console.log('Success',res)
      })
    .catch((reason: any) => console.log(reason));
    }else{
      this.appConfig.toast("Plesse enter text for speach")
    }
  }
  StopSpeach(){
    this.Speaching=true;
    this.tts.stop();
  }
}
