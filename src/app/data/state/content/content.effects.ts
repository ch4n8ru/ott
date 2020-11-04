import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { MockapiService } from '../../mockapi.service';
import { ContentActionTypes, ContentsLoaded, LoadContents } from './content.action';
import { ContentState } from './content.reducer';

@Injectable({providedIn: 'root'})
export class ContentEffects{
    constructor(private dataPersistence : DataPersistence<ContentState>,
        private mockApiService: MockapiService
        ){}

    @Effect()
        loadContents$ = this.dataPersistence.fetch(ContentActionTypes.LoadContents , {
            run:(action : LoadContents  , state: ContentState) => {
                return this.mockApiService.getAllContents().pipe(
                    map((res:any) => new ContentsLoaded(res.body)))
            },
            onError: () => {}
        })

}