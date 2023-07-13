import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.page.html',
  styleUrls: ['./youtube-video.page.scss'],
})
export class YoutubeVideoPage implements OnInit {

	videoID : string;
	constructor(private youtube: YoutubeVideoPlayer) {}
	
	playYouTube(){
		this.youtube.openVideo(this.videoID);
	}


  ngOnInit() {
  }

}
