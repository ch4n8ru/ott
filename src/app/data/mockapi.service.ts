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

  updateContent( contentToUpdate){
      return this.storageAPI.updateContent(contentToUpdate)
  }

  addNewContent(newContent:Content){
    return this.storageAPI.addNewContent(newContent)
  }

  getContentsForUser(userId){
    return this.storageAPI.getContentForUser(userId)
  }

  getAvailableGenres(){
    return this.storageAPI.getAvailableGenres()
  }
  getAvailableLanguages(){
    return this.storageAPI.getAvailableLanguages()
  }
}
