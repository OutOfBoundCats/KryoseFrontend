import {Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as ApppStore from '../../ReduxStore/app.reducer';

@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.css']
})
export class VideoEditorComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line:max-line-length
  constructor(private renderer: Renderer2, private elRef: ElementRef, private http: HttpClient, private store: Store<ApppStore.AppState>) { }
  @ViewChild('transcript')
  transcript: ElementRef;
  returnString: string;
  words: object[];
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(this.transcript.nativeElement);
    // const initialSpan = this.renderer.createElement('span');
    // const text = this.renderer.createText('Hi hello');
    // this.renderer.appendChild(initialSpan, text);
    // this.renderer.appendChild(this.transcript.nativeElement, initialSpan);
    // // 2
    // const initialSpan1 = this.renderer.createElement('span');
    // const text1 = this.renderer.createText('Hi hello');
    // this.renderer.appendChild(initialSpan1, text1);
    // this.renderer.appendChild(this.transcript.nativeElement, initialSpan1);
  }

  MyOnclik(): any{
    // let returnString;
    let mytoken;
    this.store.select('authReduce').subscribe(
      (data) => {
        mytoken = data.user.token;
      }
    );

    const token = mytoken;
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + token)
    };
    const url = 'http://localhost:8090/api/totext';
    this.http.get(url, header).subscribe(
      (data) => {
        this.returnString = JSON.stringify(data);
        // console.log('json stringify ' + this.returnString);
        const lenght = data['results_'][0]['alternatives_'][0]['words_']['length'];
        for (let _i = 0; _i < lenght ; _i++){
          // console.log(data['results_'][0]['alternatives_'][0]['words_'][_i]['word_']);
          const text = data['results_'][0]['alternatives_'][0]['words_'][_i]['word_'];
          const initialSpan1 = this.renderer.createElement('span');
          const text1 = this.renderer.createText(text +' ');
          this.renderer.appendChild(initialSpan1, text1);
          this.renderer.appendChild(this.transcript.nativeElement, initialSpan1);
        }

      }
    );

  }

}
