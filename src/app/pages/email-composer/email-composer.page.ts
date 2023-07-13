import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-email-composer',
  templateUrl: './email-composer.page.html',
  styleUrls: ['./email-composer.page.scss'],
})
export class EmailComposerPage implements OnInit {
  toMail:any='';
  Ccmail:any='';
  subject:any='';
  body:any='';
  constructor(
    public appconfig:AppConfigService,
    private emailComposer: EmailComposer
  ) { }

  ngOnInit() {
  }
  sendMail(){
    if(this.toMail && this.subject && this.body){
      let email = {
        to: this.toMail,
        cc: this.Ccmail,
        subject:this.subject,
        body: this.body,
        isHtml: true
      };
      
      // Send a text message using default options
      this.emailComposer.open(email);
    }else{
      this.appconfig.toast("Please fill all details!")
    }
  }
}
