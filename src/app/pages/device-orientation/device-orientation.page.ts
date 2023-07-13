import { Component, OnInit } from '@angular/core';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';
@Component({
  selector: 'app-device-orientation',
  templateUrl: './device-orientation.page.html',
  styleUrls: ['./device-orientation.page.scss'],
})
export class DeviceOrientationPage implements OnInit {
  data: DeviceOrientationCompassHeading;
  device: any;
  constructor(
    private deviceOrientation: DeviceOrientation
  ) { }

  ngOnInit() {
    this.watchposition();
  }
watchposition(){
     // Watch the device compass heading change
    this.device= this.deviceOrientation.watchHeading().subscribe((res: DeviceOrientationCompassHeading) => {
      console.log(res)
      this.data = res;
      console.log(this.data)
      }
    );
}
ionViewDidLeave(){
  this.device.unsubscribe();
}
}
