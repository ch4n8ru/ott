import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Content } from 'src/app/data/models/content';
import { LogOut } from 'src/app/data/state/auth/auth.action';
import { StorageAPIService } from 'src/app/storage-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  constructor(
    private storageApi: StorageAPIService,
    private store: Store,
    private toastService: ToastrService
  ) {}

  /**Variables required for component */
  public imageUrl: string;
  public availableGenres: Array<any>;
  public availableCast: Array<any>;
  public selectedGenres: Array<any>;
  public genreDropdownSettings;
  public castDropDownSettings;
  public selectedCast: Array<any>;

  ngOnInit(): void {
    /**
     * Initialize available casts and genres
     */
    this.availableGenres =
      this.storageApi.getAvailableGenres().map((genre) => {
        return {
          id: genre.id,
          itemName: genre.name,
        };
      }) || [];

    this.availableCast =
      this.storageApi.getAvailableCast().map((cast) => {
        return {
          id: cast.id,
          itemName: cast.name,
        };
      }) || [];
    this.selectedGenres = [];
    this.selectedCast = [];

    this.genreDropdownSettings = {
      singleSelection: false,
      text: 'Select Genres',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      addNewItemOnFilter: true,
      classes: 'myclass custom-class',
    };

    this.castDropDownSettings = {
      singleSelection: false,
      text: 'Select Cast',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      addNewItemOnFilter: true,
      classes: 'myclass custom-class',
    };
  }

  contentForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    type: new FormControl(''),
    language: new FormControl('', Validators.required),
    added: new FormControl(''),
    genres: new FormControl([], Validators.required),
    cast: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  submitContentForm() {
    this.createNewContentUsingFormData();
  }

  /**
   * Method that reads the form value and creates a new content based on it
   */
  createNewContentUsingFormData() {
    let fValue = this.contentForm.value;
    let newContent: Content = {} as Content;
    newContent.title = fValue.title;
    newContent.added = new Date();
    newContent.cast = fValue.cast.map((cast) => cast.itemName);
    newContent.genres = fValue.genres.map((genre) => genre.itemName);
    // newContent.imageUrl = fValue.imageUrl
    newContent.imageUrl = this.imageUrl;
    newContent.language = fValue.language;
    console.log(newContent);
    this.storageApi.addNewContent(newContent).subscribe((res: any) => {
      if (res.status) {
        this.addNewLanguage(this.contentForm.value.language);

        this.contentForm.reset();
        this.imageUrl = '';
        this.toastService.success('Success', 'New Content added successfully!');
      } else {
        this.toastService.error(
          res.err,
          'Could not add new Content! Please try with a smaller image LocalStorage is limited to 25MB',
          {
            timeOut: 15000,
          }
        );
      }
    });
  }

  setDataUrl = (imageUrl) => {
    this.imageUrl = imageUrl;
  };

  /**
   * Handles reading  the base64 string of uploaded images
   * 
   */
  uploadFileToServer(event, setDataUrl) {
    var file = event.srcElement.files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      console.log(reader.result as string);
      setDataUrl(reader.result);
    };
    reader.onerror = function () {
      console.log('there are some problems');
    };
  }

  addNewCast(event) {
    console.log(event);
    this.storageApi.addNewCast({
      name: event,
    });
    this.availableCast = this.storageApi.getAvailableCast().map((cast) => {
      return {
        id: cast.id,
        itemName: cast.name,
      };
    }) || [];
  }

  addNewGenre(event) {
    console.log(event);
    this.storageApi.addNewGenre({
      name: event,
    });
    this.availableGenres =
      this.storageApi.getAvailableGenres().map((genre) => {
        return {
          id: genre.id,
          itemName: genre.name,
        };
      }) || [];
  }

  addNewLanguage(language) {
    this.storageApi.addNewLanguage(language);
  }

  logout() {
    this.store.dispatch(new LogOut());
  }
}
