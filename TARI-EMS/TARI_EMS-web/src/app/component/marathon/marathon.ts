import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
  import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-marathon',
  templateUrl: './marathon.html',
  styleUrl: './marathon.css',
  imports: [RouterModule,CommonModule],
standalone:true,
})
export class Marathon implements OnInit,AfterViewInit {

  targetDate = new Date('2026-06-20T00:00:00');

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  selectedPayment: string | null = null;

  participants = [
    "John Msuya",
    "Neema Joseph",
    "David Komba",
    "Amina Ally",
    "Peter Mushi",
    "Rose John",
    "Emmanuel Paul",
    "Fatma Hassan"
  ];
    events: any[] = [];

constructor(private http: HttpClient,private router: Router, private cdr: ChangeDetectorRef) {}

intervalId: any;

ngOnInit() {
  this.startCountdown();
}

// startCountdown() {
//   this.intervalId = setInterval(() => {
//     this.updateCountdown();
//   }, 1000);
// }

ngOnDestroy() {
  clearInterval(this.intervalId);
}

startCountdown() {
  this.intervalId = setInterval(() => {
    this.updateCountdown();
    this.cdr.detectChanges(); // 🔥 forces UI update every second
  }, 1000);
}





 updateCountdown() {
  const now = new Date().getTime();
  const distance = this.targetDate.getTime() - now;

  if (distance <= 0) {
    this.days = this.hours = this.minutes = this.seconds = 0;
    return;
  }

  this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  this.hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  this.minutes = Math.floor((distance / (1000 * 60)) % 60);
  this.seconds = Math.floor((distance / 1000) % 60);
}

  selectPayment(method: string) {
    this.selectedPayment = method;
  }



 ngAfterViewInit() {
    const video: any = document.getElementById('bgvideo');

    if (video) {
      video.defaultPlaybackRate = 0.5;
      video.playbackRate = 0.5;

      video.play().catch(() => {});
    }
  }
  goToRegister(event: any) {
  this.router.navigate(['/details', event.id]);
}
}