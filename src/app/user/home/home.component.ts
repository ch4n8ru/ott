import { Component, Injector, OnInit } from '@angular/core';
import { Content } from 'src/app/data/models/content';
import { select, Store } from '@ngrx/store';
import { ContentState } from 'src/app/data/state/content/content.reducer';
import { AppState, selectDisplayContents } from 'src/app/data/state';
import { LoadContents } from 'src/app/data/state/content/content.action';
import { LogOut } from 'src/app/data/state/auth/auth.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public store: Store;
  displayContents$;
  constructor(injector: Injector) {
    this.store = injector.get(Store);
    this.displayContents = []
    this.store.dispatch(new LoadContents)
    this.store.select(selectDisplayContents).subscribe(display => {
      // console.log(display)
      this.displayContents = display
    })
  }

  allContents: Array<Content>;

  displayContents: Array<Content>;

  ngOnInit(): void {

  }

  logOut(){
    this.store.dispatch(new LogOut)
  }
}
