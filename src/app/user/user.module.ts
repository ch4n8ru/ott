import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseContentComponent } from './browse-content/browse-content.component';
import { CuratedComponent } from './curated/curated.component';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { ContentCardComponent } from './content-card/content-card.component';
import { RatingModule } from 'ng-starrating';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BrowseContentComponent,
    CuratedComponent,
    HomeComponent,
    ContentCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RatingModule,
    FormsModule
  ],
})
export class UserModule { }
