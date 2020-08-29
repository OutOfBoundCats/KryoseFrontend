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
  currentTranscriptTime: string;
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
      // console.log('The currentTime attribute has been updated. Again.' );
      // console.log(this.player.currentTime());
      this.store.dispatch(new videoTextActions.UpdateCurrentTime({VideosCurrentTime: this.player.currentTime().toString()}));
    });
    this.getCurrentTime();
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
    this.currentTranscriptTime = null;
    this.store.select('videoTextReducer').subscribe(
      reducer => {
        if (this.currentTranscriptTime !== reducer.TranscriptCurrentTime){
          this.currentTranscriptTime = reducer.TranscriptCurrentTime;
          // tslint:disable-next-line:radix
          this.player.currentTime(parseFloat(this.currentTranscriptTime));
        }
      }
    );
  }
}

