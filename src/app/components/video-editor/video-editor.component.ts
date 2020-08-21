import {Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.css']
})
export class VideoEditorComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  @ViewChild('transcript')
  transcript: ElementRef;
  ngOnInit(): void {
    // const initialSpan = this.renderer.createElement('span');
    // const text = this.renderer.createText('Hi hello');
    // this.renderer.appendChild(initialSpan, text);
    // this.renderer.appendChild(this.transcript.nativeElement, initialSpan);
    // console.log(this.transcript.nativeElement);
  }

  ngAfterViewInit(): void {
    // console.log(this.transcript.nativeElement);
    const initialSpan = this.renderer.createElement('span');
    const text = this.renderer.createText('Hi hello');
    this.renderer.appendChild(initialSpan, text);
    this.renderer.appendChild(this.transcript.nativeElement, initialSpan);
    const initialSpan1 = this.renderer.createElement('span');
    const text1 = this.renderer.createText('Hi hello');
    this.renderer.appendChild(initialSpan1, text1);
    this.renderer.appendChild(this.transcript.nativeElement, initialSpan1);
  }

}
