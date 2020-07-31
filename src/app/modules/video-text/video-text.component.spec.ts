import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTextComponent } from './video-text.component';

describe('VideoTextComponent', () => {
  let component: VideoTextComponent;
  let fixture: ComponentFixture<VideoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
