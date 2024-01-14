import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingsList: any = [];
  constructor() { }

  addBooking(booking: any) {
    this.bookingsList.push(booking);
  }
  getBookingList() {
    return this.bookingsList;
  }
}
