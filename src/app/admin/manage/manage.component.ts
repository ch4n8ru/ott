import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Content } from 'src/app/data/models/content';
import { StorageAPIService } from 'src/app/storage-api.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private storageApi : StorageAPIService) { }

  ngOnInit(): void {
    this.availableGenres = this.storageApi.getAvailableGenres().map(genre => {
      return {
        id:genre.id,
        itemName:genre.name
      }
    }) || []
    //  [
    //   { "id": 1, "itemName": "India" },
    //   { "id": 2, "itemName": "Singapore" },
    //   { "id": 3, "itemName": "Australia" },
    //   { "id": 4, "itemName": "Canada" },
    //   { "id": 5, "itemName": "South Korea" },
    //   { "id": 6, "itemName": "Germany" },
    //   { "id": 7, "itemName": "France" },
    //   { "id": 8, "itemName": "Russia" },
    //   { "id": 9, "itemName": "Italy" },
    //   { "id": 10, "itemName": "Sweden" }
    // ];
    

    this.availableCast =  this.storageApi.getAvailableCast().map(cast => {
      return {
        id:cast.id,
        itemName:cast.name
      }
    }) || []
    this.selectedGenres = [];
    this.selectedCast = [];

    this.genreDropdownSettings = {
      singleSelection: false,
      text: "Select Genres",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      addNewItemOnFilter: true,
      classes: "myclass custom-class"
    };

    this.castDropDownSettings = {
      singleSelection: false,
      text: "Select Cast",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      addNewItemOnFilter: true,
      classes: "myclass custom-class"
    };
  }


  contentForm:FormGroup = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(''),
    language: new FormControl(''),
    added: new FormControl(''),
    genres: new FormControl([],Validators.required),
    cast: new FormControl(''),
    year: new FormControl(''),
  });


  availableGenres;
  availableCast;
  selectedGenres;
  genreDropdownSettings;
  castDropDownSettings;
  selectedCast;


  submitContentForm(){
  this.createNewContentUsingFormData();    
  }

  createNewContentUsingFormData(){
    let fValue = this.contentForm.value;
    let newContent:Content = {} as Content;
    newContent.title = fValue.title
    newContent.added = new Date()
    newContent.cast = fValue.cast.map(cast => cast.itemName)
    newContent.genres = fValue.genres.map(genre => genre.itemName)
    newContent.imageUrl = this.imageUrl
    newContent.language = fValue.language
    console.log(newContent)
    this.storageApi.addNewContent(newContent).subscribe(res => 
      console.log(res))
  }

  setDataUrl = (imageUrl) => {
    this.imageUrl = imageUrl
  }

  uploadFileToServer(event ,setDataUrl) {
    var file = event.srcElement.files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function() {
        console.log((reader.result as string));
        setDataUrl(reader.result)
        
    };
    reader.onerror = function() {
        console.log('there are some problems');
    };
}



imageUrl;

addNewCast(event){
  console.log(event)
  this.storageApi.addNewCast({name:event})
}

addNewGenre(event){
  console.log(event)
  this.storageApi.addNewGenre({name:event})
}

}

/*
contentId,
rating,
imageUrl
 */


  // <!-- contentId: string,
  //   title:string,
  //   duration:string,
  //   type:ContentType,
  //   rating?:any,
  //   language: string,
  //   added:Date,
  //   genres: Array<string>,
  //   cast:Array<string>,
  //   year:string,
  //   imageUrl:string -->

