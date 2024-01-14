import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
  bookingData: any;
  
  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.getData();

  }

  getData() {
    this.http.getDataFromServer("bookings").subscribe((responce: any) => {
      if (responce && responce.length > 0) {
        this.bookingData = responce;
        console.log("booking Data", this.bookingData);
      }
    })
  }
}
