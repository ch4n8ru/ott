import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StarRatingComponent } from 'ng-starrating';
import { Content } from 'src/app/data/models/content';
import { UpdateContent } from 'src/app/data/state/content/content.action';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() content: Content;
  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    // alert(`Old Value:${$event.oldValue}, 
    //   New Value: ${$event.newValue}, 
    //   Checked Color: ${$event.starRating.checkedcolor}, 
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    const newRating = $event.newValue;
    let updatedContent = {...this.content}
    updatedContent.rating = newRating;
    console.log(updatedContent)
    this.store.dispatch(new UpdateContent(updatedContent));
  }

  formatGenre(genre : Array<string>){

  }

}
