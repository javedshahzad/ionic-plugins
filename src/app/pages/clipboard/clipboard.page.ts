import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {
	text1 : string;
	text2 : string;
  constructor(private clipboard: Clipboard) { }

  ngOnInit() {
  }
  doCopy(){
		this.clipboard.copy(this.text1);
	}
	
	doPaste(){
		this.clipboard.paste().then(	
		(resolve: string) => {
			this.text2 = resolve;
		},
		(reject: string) => {
			alert('Error: ' + reject);
		}
		);
	}
	
	doClear(){
		this.clipboard.clear();
	}

}
