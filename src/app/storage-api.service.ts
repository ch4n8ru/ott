import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRights } from './data/models/auth';
import { Content } from './data/models/content';

@Injectable({
  providedIn: 'root'
})
export class StorageAPIService {

  constructor() { }

  writeToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  getAllUsers(){
    return this.readFromLocalStorage("users")
  }

  getAllContents(){
    return new Observable(subscriber => {
      subscriber.next(this.readFromLocalStorage('availableContent'))
      subscriber.complete();
    })
  }

  updateContent(newContent:Content){
    let availContent:Array<Content> = this.readFromLocalStorage('availableContent');
    let oldIdx = availContent.findIndex(content => content.contentId = newContent.contentId);
    if(oldIdx)
      {
        availContent[oldIdx] = newContent;
        this.writeToLocalStorage('availableContent' , availContent);
      }
    return new Observable(subs => {
      subs.next({status:"ok"})
      subs.complete()
    })
  }

  addNewContent(newContent:Content){
    let avail = this.readFromLocalStorage('availableContent') 
    if(avail){
      newContent.contentId = String(avail.length + 1)
    }
    else{
      avail = []
      newContent.contentId =  "1"
    }
    avail.push(newContent)
    this.writeToLocalStorage('availableContent' , avail)

    return new Observable(subs => {
      subs.next({status:"ok"})
      subs.complete()
    })
  }

  getAvailableGenres(){
    return this.readFromLocalStorage("availableGenres")
  }

  getAvailableCast(){
    return this.readFromLocalStorage("availableCast")
  }

  addNewGenre(genre){
    let modified = this.readFromLocalStorage("availableGenres")
    genre.id = modified.length + 1
    modified.push(genre)
    this.writeToLocalStorage("availableGenres" , modified)
  }

  addNewCast(cast){
    let modified = this.readFromLocalStorage("availableCast")
    cast.id = modified.length + 1
    modified.push(cast)
    this.writeToLocalStorage("availableGenres" , modified)
  }

  initializeLocalStorage() {
    const contents = [
        {
          "contentId": "1",
          "title": "title1",
          "duration": "2h",
          "type": 0,
          "rating": 3,
          "language": "Hindi",
          "added": "28/05/1998",
          "genres": [
            "crime",
            "thriller"
          ],
          "cast": [
            "A",
            "B",
            "C"
          ],
          "year": "2000",
          "imageUrl": "image1"
        },
        {
          "contentId": "2",
          "title": "title2",
          "duration": "2h",
          "type": 0,
          "rating": 3,
          "language": "Tamil",
          "added": "21/05/1998",
          "genres": [
            "romance",
            "drama"
          ],
          "cast": [
            "A",
            "B",
            "C"
          ],
          "year": "2000",
          "imageUrl": "image2"
        },
        {
          "contentId": "3",
          "title": "title3",
          "duration": "2h",
          "type": 0,
          "rating": 2,
          "language": "Hindi",
          "added": "18/05/1998",
          "genres": [
            "crime",
            "thriller"
          ],
          "cast": [
            "A",
            "B",
            "C"
          ],
          "year": "2000",
          "imageUrl": "image3"
        },
        {
          "contentId": "4",
          "title": "title4",
          "type": 0,
          "rating": 3,
          "language": "English",
          "added": "20/05/1998",
          "genres": [
            "romcom"
          ],
          "cast": [
            "A",
            "B",
            "C"
          ],
          "year": "2000",
          "imageUrl": "image4"
        },
        {
          "contentId": "5",
          "title": "title5",
          "duration": "2h",
          "type": 0,
          "rating": 3,
          "language": "Hindi",
          "added": "28/06/1998",
          "genres": [
            "action"
          ],
          "cast": [
            "A",
            "B",
            "C"
          ],
          "year": "2000",
          "imageUrl": "image5"
        },
        {
          "contentId": "6",
          "title": "title6",
          "duration": "2h",
          "type": 0,
          "rating": 2,
          "language": "Hindi",
          "added": "28/05/1998",
          "genres": [
            "adventure",
            "action"
          ],
          "cast": [
            "A",
            "B",
            "C"
          ],
          "year": "2000",
          "imageUrl": "image6"
        },
        {
          "contentId": "7",
          "title": "title7",
          "duration": "2h",
          "type": 0,
          "rating": 2,
          "language": "English",
          "added": "28/05/1998",
          "genres": [
            "war",
            "thriller"
          ],
          "cast": [
            "A",
            "B",
            "C"
          ],
          "year": "2000",
          "imageUrl": "image1"
        },
        {
          "contentId": "8",
          "title": "title8",
          "duration": "2h",
          "type": 0,
          "rating": 4,
          "language": "Tamil",
          "added": "28/05/1998",
          "genres": [
            "crime",
            "thriller"
          ],
          "cast": [
            "A",
            "B",
            "C"
          ],
          "year": "2000",
          "imageUrl": "image1"
        }
      ];

    const availableGenres = [
      {
        id: 1,
        name: "ACTION"
      },
      {
        id: 2,
        name: "ADVENTURE"
      },
      {
        id: 3,
        name: "THRILLER"
      }
    ]

    const availableCast = [
      {
        id:1,
        name:"actor1"
      },
      {
        id:2,
        name:"actor2"
      },
      {
        id:3,
        name:"actor3"
      }
    ]

    const users = {
      "2" : {
        userId : "2",
        userName:"John",
        password:"1234",
        email:"John@abc.com",
        rights:UserRights.VIEW,
        userContent:{
          1:{
            rating:1
          },
          2:{
            rating:5
          },
          5:{
            rating:4
          }
        }
      }
    }
    if(!localStorage.getItem('availableContent'))
      this.writeToLocalStorage('availableContent' , contents)
    if(!localStorage.getItem('availableGenres'))
      this.writeToLocalStorage('availableGenres' , availableGenres)
    if(!localStorage.getItem('availableCast'))
      this.writeToLocalStorage('availableCast' , availableCast)
    if(!localStorage.getItem('users'))
      this.writeToLocalStorage('users' , users)
  }

  
}


// "ACTION", "ADVENTURE", "THRILLER"