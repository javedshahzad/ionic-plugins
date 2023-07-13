import { Component, OnInit } from '@angular/core';
import { OCR,OCRResult,OCRSourceType  } from '@ionic-native/ocr/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.page.html',
  styleUrls: ['./ocr.page.scss'],
})
export class OcrPage implements OnInit {
  imageUrl: any='assets/img.png';
  files: any;
  data: any;
  OCRAD: any;
  constructor(
    private ocr: OCR,
    private loadingCtrl:LoadingController
  ) { }

  ngOnInit() {
  }
  showPreviewImage(event: any) {
    console.log(event)
    this.files= event.target.files[0];
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          console.log(event)
            this.imageUrl = event.target.result;
            // console.log(this.localUrl)
        }
        reader.readAsDataURL(event.target.files[0]);
    }
}
extractText(){
  this.analyze();
}
async analyze() {
  const loader = await this.loadingCtrl.create({
    message: 'Please wait...'
  });
    loader.present();
  (<any>window).OCRAD(document.getElementById('uploaded-image'), (text:any) => {
    loader.dismiss();
    console.log(text);
    this.data=text.toString();
  });
}

restart() {
  this.imageUrl = '';
  this.data=''
}
}
