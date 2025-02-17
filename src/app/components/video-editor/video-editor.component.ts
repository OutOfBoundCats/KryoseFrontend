import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
  ViewChildren,
  QueryList,
  Inject
} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as ApppStore from '../../ReduxStore/app.reducer';
import {DOCUMENT} from '@angular/common';
import videojs from 'video.js';
import * as videoTextActions from '../../modules/video-text/store/videotext.actions';
import {element} from 'protractor';

declare var $: any;

@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.css']
})
export class VideoEditorComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line:max-line-length
  constructor(private renderer: Renderer2, private elRef: ElementRef, private http: HttpClient, private store: Store<ApppStore.AppState>, @Inject(DOCUMENT) document) { }
  @ViewChild('transcript')
  transcript: ElementRef;
  @ViewChildren('transcript')
  childrentranscript: ElementRef ;
  returnString: string;
  words: object[];
  currentVideoTime: string = null;
  @HostListener('click', ['$event'])
  onClick(e) {
    console.log(e.target.id);
    console.log(document.getElementById(e.target.id).innerText);
    console.log(document.getElementById(e.target.id).getAttribute('data-start'));
    const startTime = document.getElementById(e.target.id).getAttribute('data-start');
    this.setCurrentTime(startTime);
  }

  ngOnInit(): void {
    this.getCurrentTime();
  }

  ngAfterViewInit(): void {}

  MyOnclik(): any{
    const url = 'http://localhost:8090/api/totext';
    this.http.get(url).subscribe(
      (data) => {
        this.returnString = JSON.stringify(data);
        console.log(data);
        localStorage.setItem('jsonTranscript', JSON.stringify(data));
        // console.log('json stringify ' + this.returnString);
        const lenght = data['results_'][0]['alternatives_'][0]['words_']['length'];

        for (let _i = 0; _i < lenght ; _i++){
          // console.log(data['results_'][0]['alternatives_'][0]['words_'][_i]['word_']);
          const text = data['results_'][0]['alternatives_'][0]['words_'][_i]['word_'];
          const confidence = data['results_'][0]['alternatives_'][0]['words_'][_i]['confidence_'];
          const startTimeNano = data['results_'][0]['alternatives_'][0]['words_'][_i]['startTime_']['nanos_'];
          const startTimeSec = data['results_'][0]['alternatives_'][0]['words_'][_i]['startTime_']['seconds_'];
          const startTimeNormalised = startTimeSec * (Math.pow(10,9)) + startTimeNano;
          // end time
          const endTimeNano = data['results_'][0]['alternatives_'][0]['words_'][_i]['endTime_']['nanos_'];
          const endTimeSec = data['results_'][0]['alternatives_'][0]['words_'][_i]['endTime_']['seconds_'];
          const endTimeNormalised = endTimeSec * (Math.pow(10,9)) + endTimeNano;
          const initialSpan1 = this.renderer.createElement('span');
          const text1 = this.renderer.createText(text + ' ');
          this.renderer.appendChild(initialSpan1, text1);
          this.renderer.addClass(initialSpan1, 'timestamp_transcript');
          this.renderer.setAttribute(initialSpan1, 'data-start', startTimeNormalised);
          this.renderer.setAttribute(initialSpan1, 'data-end', endTimeNormalised);
          this.renderer.setAttribute(initialSpan1, 'data-confidence', confidence);
          this.renderer.setAttribute(initialSpan1, 'id', String(_i));
          if (confidence < 0.6){
            this.renderer.setStyle(initialSpan1, 'color', 'red');
          }
          this.renderer.appendChild(this.transcript.nativeElement, initialSpan1);
        }

      }
    );
  }

  // tslint:disable-next-line:typedef
  GetID() {
    // const article = document.querySelector('#0');
    // console.log(document.getElementById('50').dataset.start);
    // Retrive json from localstorage
    const jsonTranscript = JSON.parse(localStorage.getItem('jsonTranscript'));
    console.log(jsonTranscript);
    const lenght = jsonTranscript['results_'][0]['alternatives_'][0]['words_']['length'];
    let finalText = '';
    // make changes according to span tags
    for (let i = 0; i < lenght ; i++){
      if (document.getElementById(i.toString())){
        const text = document.getElementById(i.toString()).innerText;
        jsonTranscript['results_'][0]['alternatives_'][0]['words_'][i]['word_'] = text;
        finalText = finalText + text;
        //console.log(text);
      }else{
        delete jsonTranscript['results_'][0]['alternatives_'][0]['words_'][i] ;
      }
    }
    jsonTranscript['results_'][0]['alternatives_'][0]['transcript_'] = finalText;
    localStorage.setItem('jsonTranscript', JSON.stringify(jsonTranscript));
    console.log('Update to local storage is amde');
  }

  GetSRT() {
    const jsonTranscript = JSON.parse(localStorage.getItem('jsonTranscript'));

  }

  // tslint:disable-next-line:typedef
  setCurrentTime(startTime: string){
    if (startTime != null){
      const currentTime = parseInt(startTime, 10);
      const timeInMiliSeconds = currentTime / 1000000;
      const timeInSeconds = currentTime / 1000000000;
      const timeInString = timeInMiliSeconds.toString();
      this.store.dispatch(new videoTextActions.UpdateTranscriptCurrentTime({TranscriptCurrentTime: timeInSeconds.toString()}));
    }
  }
  // tslint:disable-next-line:typedef
  getCurrentTime(){
    this.store.select('videoTextReducer').subscribe(
      reducer => {
        if (this.currentVideoTime !== reducer.VideosCurrentTime){
          console.log('currenttime not equal  ' + reducer.VideosCurrentTime);
          this.colorElements(reducer.VideosCurrentTime);
        }
      }
    );
  }
  // tslint:disable-next-line:typedef
  colorElements(currentTime: string){
    const currentVideoTime = currentTime;
    const currentTimeInSeconds = parseFloat(currentVideoTime);
    console.log('current video time is ' + currentTimeInSeconds);
    const jsonTranscript = JSON.parse(localStorage.getItem('jsonTranscript'));
    // console.log(jsonTranscript);
    const lenght = jsonTranscript['results_'][0]['alternatives_'][0]['words_']['length'];
    // make changes according to span tags
    for (let i = 0; i < lenght ; i++){
      console.log('runnign for loop ' + i);
      const currentElement = document.getElementById(String(i));
      const startTime = parseFloat(currentElement.getAttribute('data-start'));
      // @ts-ignore
      const startTimeInSeconds = startTime / 1000000000;
      const endTime = parseFloat(currentElement.getAttribute('data-end'));
      // @ts-ignore
      const endTimeInSeconds = endTime / 1000000000;
      console.log('starttime is '+startTimeInSeconds + ' end time is '+endTimeInSeconds+ ' for elemnt '+currentElement.innerText);
      if ((startTimeInSeconds < parseFloat(currentVideoTime)) && (endTimeInSeconds > parseFloat(currentVideoTime))){
        console.log(startTimeInSeconds + ' is less than ' + parseFloat(currentVideoTime) + ' and ' + endTimeInSeconds + 'is grater than '+ parseFloat(currentVideoTime));
        console.log('change color to blue ' + currentElement.innerText);
        currentElement.style.backgroundColor = 'blue';

      }else{
        currentElement.style.backgroundColor = '';
      }
    }
  }
}
