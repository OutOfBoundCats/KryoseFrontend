import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import {Store} from '@ngrx/store';
import * as ApppStore from '../../ReduxStore/app.reducer';
import * as videoTextActions from '../../modules/video-text/store/videotext.actions';
import get = Reflect.get;


@Component({
  selector: 'app-vjs-player',
  template: `
    <video #target class="video-js" controls muted playsinline preload="none"></video>
  `,
  styleUrls: ['./videos.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideosComponent implements OnInit, OnDestroy {
   videoCurrentTime: string;
  @ViewChild('target', {static: true}) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input() options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    sources: {
      src: string,
      type: string,
    }[],
  };
  player: videojs.Player;

  constructor(
    private elementRef: ElementRef,
    private store: Store<ApppStore.AppState>
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
    this.target.nativeElement.addEventListener( 'timeupdate', (event) => {
      console.log('The currentTime attribute has been updated. Again.' );
      console.log(this.player.currentTime());
      this.store.dispatch(new videoTextActions.UpdateCurrentTime({currentTime: this.player.currentTime()}));
    });
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

  // tslint:disable-next-line:typedef
  setCurrentTime(){

  }
  // tslint:disable-next-line:typedef
  getCurrentTime(){
    this.store.select('videoTextReducer').subscribe(
      currentTime => {
          this.videoCurrentTime = currentTime.currentTime;
          console.log('from videos ' + parseInt(this.videoCurrentTime, 10) / 1000);
          this.player.currentTime(parseInt(this.videoCurrentTime, 10) / 1000);
      }
    );
  }
}

