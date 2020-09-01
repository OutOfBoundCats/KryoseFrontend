import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTextItemComponent } from './video-text-item.component';

describe('VideoTextItemComponent', () => {
  let component: VideoTextItemComponent;
  let fixture: ComponentFixture<VideoTextItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTextItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTextItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
