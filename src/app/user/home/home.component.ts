import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.allContents = JSON.parse(`{
      "availableContent" : [
          {
              "contentId": "1aihpasvhnoaiovnra",
              "title":"title1",
              "duration":"2h",
              "type":0,
              "rating":5,
              "language": "Hindi",
              "added":"28/05/1998",
              "genres": ["crime" , "thriller"],
              "cast":["A" , "B" , "C"],
              "year":"2000"
          },
          {
              "contentId": "1aihpasvhnoaiovnrb",
              "title":"title2",
              "duration":"2h",
              "type":0,
              "rating":2,
              "language": "Tamil",
              "added":"21/05/1998",
              "genres": ["romance" , "drama"],
              "cast":["A" , "B" , "C"],
              "year":"2000"
          },
          {
              "contentId": "1aihpasvhnoaiovnrc",
              "title":"title3",
              "duration":"2h",
              "type":0,
              "rating":4,
              "language": "Hindi",
              "added":"18/05/1998",
              "genres": ["crime" , "thriller"],
              "cast":["A" , "B" , "C"],
              "year":"2000"
          },
          {
              "contentId": "1aihpasvhnoaiovnrd",
              "title":"title4",
              "type":0,
              "rating":3,
              "language": "English",
              "added":"20/05/1998",
              "genres": ["romcom"],
              "cast":["A" , "B" , "C"],
              "year":"2000"
          },
          {
              "contentId": "1aihpasvhnoaiovnre",
              "title":"title5",
              "duration":"2h",
              "type":0,
              "rating":2,
              "language": "Hindi",
              "added":"28/06/1998",
              "genres": ["action"],
              "cast":["A" , "B" , "C"],
              "year":"2000"
          },
          {
              "contentId": "1aihpasvhnoaiovnrf",
              "title":"title6",
              "duration":"2h",
              "type":0,
              "rating":1,
              "language": "Hindi",
              "added":"28/05/1998",
              "genres": [ "adventure" , "action"],
              "cast":["A" , "B" , "C"],
              "year":"2000"
          },
          {
              "contentId": "1aihpasvhnoaiovnrg",
              "title":"title7",
              "duration":"2h",
              "type":0,
              "rating":5,
              "language": "English",
              "added":"28/05/1998",
              "genres": ["war" , "thriller"],
              "cast":["A" , "B" , "C"],
              "year":"2000"
          },
          {
              "contentId": "1aihpasvhnoaiovnrh",
              "title":"title8",
              "duration":"2h",
              "type":0,
              "rating":4,
              "language": "Tamil",
              "added":"28/05/1998",
              "genres": ["crime" , "thriller"],
              "cast":["A" , "B" , "C"],
              "year":"2000"
          }
  
      ]
  }`).availableContent

  this.displayContents = [...this.allContents]
   }

  allContents:Array<Content>;

  displayContents:Array<Content>;

  ngOnInit(): void {
    
  }

}
