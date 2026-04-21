import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
  standalone: true,
})
export class Details implements OnInit {






event: any;

constructor(
  private route: ActivatedRoute,
  private http: HttpClient,
  private router: Router
) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');

  this.http.get(`http://localhost:8080/api/admin/events/${id}`)
    .subscribe(res => {
      this.event = res;
      console.log("Event loaded:", res);
    });
}
goToRegister(event: any) {
  this.router.navigate(['/register', event.id]);
}
}


