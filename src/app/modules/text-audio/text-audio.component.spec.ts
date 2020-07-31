import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAudioComponent } from './text-audio.component';

describe('TextAudioComponent', () => {
  let component: TextAudioComponent;
  let fixture: ComponentFixture<TextAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
