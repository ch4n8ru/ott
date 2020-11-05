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

  updateContent( content : Content){
      return this.httpClient.put(this.gatewayUrl + '/availableContent/'+`${content.contentId}` , content ,{observe:'response'})
  }
}
