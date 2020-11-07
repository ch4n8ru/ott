import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


contentForm = new FormGroup({
      title: new FormControl(''),
      type: new FormControl(''),
      language: new FormControl(''),
      added: new FormControl(''),
      genres: new FormControl(''),
      cast: new FormControl(''),
      year: new FormControl(''),
    });
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

