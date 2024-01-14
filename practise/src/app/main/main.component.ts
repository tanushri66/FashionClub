import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  Data: any;

  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.getData();

  }

  getData() {
    this.http.getDataFromServer("character/").subscribe((responce: any) => {
      if (responce && responce.length > 0) {
        this.Data = responce;
        console.log("Data", this.Data);
      }
    })
  }
}
