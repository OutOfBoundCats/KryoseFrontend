import {Component, Input, OnInit} from '@angular/core';
import {videoTextItemModel} from './video-text-item.model';

@Component({
  selector: 'app-video-text-item',
  templateUrl: './video-text-item.component.html',
  styleUrls: ['./video-text-item.component.css']
})
export class VideoTextItemComponent implements OnInit {

  @Input() videoTextItem: videoTextItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
