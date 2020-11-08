import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockapiService } from './mockapi.service';
import { StateModule } from './state/state.module';



@NgModule({
  declarations: [],
  providers:[],
  imports: [
    CommonModule,
    StateModule
  ]
})
export class CoreDataModule { }
