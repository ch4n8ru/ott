import { Component } from '@angular/core';
import { MockapiService } from './data/mockapi.service';
import { MockauthService } from './data/mockauth.service';
import { StorageAPIService } from './storage-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private storageAPI : StorageAPIService,
    private mockAuth:MockauthService){
    this.storageAPI.initializeLocalStorage()
  }
  title = 'ott';
}
