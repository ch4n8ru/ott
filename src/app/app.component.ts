import { Component } from '@angular/core';
import { StorageAPIService } from './storage-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private storageAPI : StorageAPIService){
    this.storageAPI.initializeLocalStorage()
  }
  title = 'ott';
}
