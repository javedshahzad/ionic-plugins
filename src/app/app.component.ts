import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Barcode Scanner', url: 'barcode-scanner', icon: 'barcode' },
    { title: 'Email Composer', url: '/email-composer', icon: 'mail' },
    { title: 'Record/play audio', url: '/play-audio', icon: 'image' },
    { title: 'Compass Heading', url: '/device-orientation', icon: 'phone-portrait' },
    { title: 'OCR', url: '/ocr', icon: 'folder' },
    { title: 'Text to Speach', url: '/text-to-speach', icon: 'newspaper' },
    { title: 'YouTube Video Player', url: '/youtube-video', icon: 'videocam' },
    { title: 'Clipboard', url: '/clipboard', icon: 'clipboard' },
    { title: 'Network information', url: '/network-info', icon: 'globe' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
