import { Injectable } from '@angular/core';
import { Content } from './models/content';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private httpClient: HttpClient) { }

  gatewayUrl = "http://localhost:3000"

  getAllContents() {
    return this.httpClient.get(this.gatewayUrl + '/availableContent' , {observe:'response'})
  }
}
