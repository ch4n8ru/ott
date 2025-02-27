import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MockapiService } from '../../mockapi.service';
import { ContentActionTypes, ContentsLoaded, ContentUpdated, LoadContents, LoadUserContent, UpdateContent, UserContentLoaded } from './content.action';
import { ContentState } from './content.reducer';

@Injectable({ providedIn: 'root' })
export class ContentEffects {
    constructor(private dataPersistence: DataPersistence<ContentState>,
        private mockApiService: MockapiService
    ) { }

    @Effect()
    loadContents$ = this.dataPersistence.fetch(ContentActionTypes.LoadContents, {
        run: (action: LoadContents, state: ContentState) => {
            return this.mockApiService.getAllContents().pipe(
                map((res: any) => new ContentsLoaded(res)))
        },
        onError: () => { }
    })

    @Effect()
    loadUserContent$ = this.dataPersistence.fetch(ContentActionTypes.LoadUserContent, {
        run: (action: LoadUserContent, state: ContentState) => {
            return this.mockApiService.getContentsForUser(action.payload).pipe(
                map((res: any) => new UserContentLoaded(res)))
        },
        onError: () => { }
    })

    @Effect()
    updateContent$ = this.dataPersistence.fetch(ContentActionTypes.UpdateContent, {
        run: (action: UpdateContent, state: ContentState) => {
            return this.mockApiService.updateContent(action.payload).pipe(
                map((res: any) => new ContentUpdated(res)))
        },
        onError: () => { }
    })

}