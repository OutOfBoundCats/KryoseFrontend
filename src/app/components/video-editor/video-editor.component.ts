import {Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.css']
})
export class VideoEditorComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef, private http: HttpClient) { }
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
  MyOnclik(): any{
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyODA5ZGQyMzlkMjRiZDM3OWMwYWQxOTFmOGIwZWRjZGI5ZDM5MTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va3J5b3NlLTJjMmVhIiwiYXVkIjoia3J5b3NlLTJjMmVhIiwiYXV0aF90aW1lIjoxNTk4MTIwNzQ5LCJ1c2VyX2lkIjoiVlJVV2xnUmF6aVpGRkgyYzRiYmtzMERsREw3MyIsInN1YiI6IlZSVVdsZ1JhemlaRkZIMmM0YmJrczBEbERMNzMiLCJpYXQiOjE1OTgxMjA3NDksImV4cCI6MTU5ODEyNDM0OSwiZW1haWwiOiJmbG9hdHJhakBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZmxvYXRyYWpAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PrFVGXL21GpNZJmp41g0WZI6LXYDSi7QF5TNmgwj5A5Rg1IyrXEZMXs9pVvBCfGm7R47x0r9PcSQlJBypMz8IuELZbt8fbXBw3f20ZK3xugRzFLtW5nMdSB44KAKkWhx5Ppx2YRYTWYvFY6PUKR5nWdGX4dhfhGKIU2-yP492T2zmOH57AwCYBHk8PhluRpgcnL6PIZIJBN1IfnzKG9XBJJdwox0pKt4FkkCyB4dK2Pj5L2TRN4c-mkO-1mxrRl2nEq3lFE-UoT93bHnXNQ2oqE_LxtV9WMCUTjpR8bP8lXiDBmr15CL1nbw6Np4j8XsesLd2EUD6Zcup2SI5V9uCA';
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + token)
    };
    const url = 'http://localhost:8090/api/totext';
    this.http.get(url, header).subscribe(
      data => {
        console.log(JSON.stringify(data));
        // alert(JSON.stringify(data));
      }
    );
    // this.http.get(url, header).toPromise().then(
    //   data => {
    //     console.log('Hi data is ' + data);
    //   }
    // ).catch((error) => {
    //   console.log('Error is ' + error.message);
    // });
  }

}
