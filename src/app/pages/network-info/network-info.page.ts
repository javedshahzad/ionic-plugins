import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-network-info',
  templateUrl: './network-info.page.html',
  styleUrls: ['./network-info.page.scss'],
})
export class NetworkInfoPage implements OnInit {
	networkType : any;
	networkDownlinkMax : any;
	constructor(private network: Network) {
		this.networkType = this.network.type;
		this.networkDownlinkMax = this.network.downlinkMax;
	}

  ngOnInit() {
  }

}
