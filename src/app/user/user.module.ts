import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseContentComponent } from './browse-content/browse-content.component';
import { CuratedComponent } from './curated/curated.component';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { Routes, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    BrowseContentComponent,
    CuratedComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
})
export class UserModule { }
