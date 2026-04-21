import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-payment',
  imports: [CommonModule,FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
  standalone:true,
})
export class Payment implements OnInit{

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
goToPayments(event: any) {
  this.router.navigate(['/payment', event.id]);
}
goToDetails(event: any) {
  this.router.navigate(['/details', event.id]);
}

formData = {
  name: '',
  phone: '',
  email: '',
  age: '',
  tshirtSize: '',
  pickupLocation: '',
  raceType: '',
  agreed: false
};
submitForm() {
  if (!this.formData.name || !this.formData.phone || !this.formData.agreed) {
    alert("Please fill all required fields and accept terms");
    return;
  }

  console.log("Valid:", this.formData);
}

selectedFile: File | null = null;

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
  console.log("Selected file:", this.selectedFile);
}
submitRegistration() {
  if (!this.selectedFile) {
    alert("Please upload proof of payment");
    return;
  }

  const formData = new FormData();
  formData.append('file', this.selectedFile); // ✅ MUST be 'file'

  const registrationId = this.route.snapshot.paramMap.get('id');

  this.http.post(`http://localhost:8080/api/admin/registrations/complete/${registrationId}`, formData)
    .subscribe({
      next: (res) => {
        console.log("Completed:", res);
        alert("Payment uploaded successfully!");
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        alert("Upload failed");
      }
    });
}
}



