import { Component, OnInit } from '@angular/core';
import {videoTextItemModel} from './video-text-item/video-text-item.model';

@Component({
  selector: 'app-video-text-list',
  templateUrl: './video-text-home.component.html',
  styleUrls: ['./video-text-home.component.css']
})
export class VideoTextHomeComponent implements OnInit {

  videoTextItem: videoTextItemModel;
  constructor() { }

  ngOnInit(): void {
    this.videoTextItem =  new videoTextItemModel('Title','Description','date');
  }

}
