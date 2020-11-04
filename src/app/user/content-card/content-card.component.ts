import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { Content } from 'src/app/data/models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() content: Content;
  constructor() { }

  ngOnInit(): void {
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  formatGenre(genre : Array<string>){

  }

}
