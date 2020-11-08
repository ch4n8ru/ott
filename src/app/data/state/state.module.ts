import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '.';
import { ContentEffects } from './content/content.effects';
import { AuthEffects } from './auth/auth.effects';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    NxModule.forRoot(),
    
    EffectsModule.forRoot([
      AuthEffects,
      ContentEffects,
    ])
  ]
})
export class StateModule { }
