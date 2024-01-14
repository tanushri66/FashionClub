import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "https://rickandmortyapi.com/api/character/";

  httpHeaders: HttpHeaders = new HttpHeaders({
    "content-type": "application/json"
  })
  constructor(private httpClient: HttpClient) { }
  getDataFromServer(endpoint: string) {
    const url = this.baseUrl + endpoint;
    return this.httpClient.get(url, { headers: this.httpHeaders });
  }


}







