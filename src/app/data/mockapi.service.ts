import { Injectable } from '@angular/core';
import { Content } from './models/content';
import { HttpClient } from '@angular/common/http';
import { StorageAPIService } from '../storage-api.service';


@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private httpClient: HttpClient , private storageAPI : StorageAPIService) { }

  gatewayUrl = "http://localhost:3000"

  getAllContents() {
    return this.storageAPI.getAllContents()
  }

  updateContent( content : Content){
      return this.httpClient.put(this.gatewayUrl + '/availableContent/'+`${content.contentId}` , content ,{observe:'response'})
  }

  addNewContent(newContent:Content){
    return this.storageAPI.addNewContent(newContent)
  }
}
