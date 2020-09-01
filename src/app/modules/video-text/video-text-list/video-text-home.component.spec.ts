import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTextHomeComponent } from './video-text-home.component';

describe('VideoTextListComponent', () => {
  let component: VideoTextHomeComponent;
  let fixture: ComponentFixture<VideoTextHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTextHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTextHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
