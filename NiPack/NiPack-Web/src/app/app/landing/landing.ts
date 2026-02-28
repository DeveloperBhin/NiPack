import { Component } from '@angular/core';
  import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent {
  title = 'Ni Pack'

  bookPackage(){
    alert('Redirecting to Package booking...');
  }


@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.html',
})

  @ViewChild('bgVideo') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const vid = this.video.nativeElement;

    vid.muted = true;        // 🔥 force mute
    vid.defaultMuted = true; // 🔥 extra safety
    vid.play().catch(err => {
      console.log('Still blocked:', err);
    });
  }
}


