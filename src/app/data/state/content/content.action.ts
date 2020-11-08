import { Action } from '@ngrx/store';
import { Content } from '../../models/content';
import { FilterExpressionType } from '../../models/filter';
import { SortExpressionType } from '../../models/sort';

export enum ContentActionTypes{
    LoadContents = "[Content] Load",
    LoadUserContent = "[Content] User Load",
    UserContentLoaded = "[Content] User Loaded",
    ContentsLoaded = "[Content] Loaded",
    FilterContent = "[Content] Filter",
    SortContent = "[Content] Sort",
    UpdateContent = "[Content] Update",
    ContentUpdated = "[Content] Updated"
}

export class LoadContents implements Action{
    readonly type = ContentActionTypes.LoadContents;
    constructor(){}
}

export class LoadUserContent implements Action{
    readonly type = ContentActionTypes.LoadUserContent;
    constructor(public payload:any){}
}

export class ContentsLoaded implements Action{
    readonly type = ContentActionTypes.ContentsLoaded;
    constructor(public payload:any){}
}

export class UserContentLoaded implements Action{
    readonly type = ContentActionTypes.UserContentLoaded;
    constructor(public payload:any){}
}

export class UpdateContent implements Action{
    readonly type = ContentActionTypes.UpdateContent;
    constructor(public payload){}
}

export class ContentUpdated implements Action{
    readonly type = ContentActionTypes.ContentUpdated;
    constructor(public payload:Content){}
}

export class FilterContent implements Action{
    readonly type = ContentActionTypes.FilterContent;
    constructor(public payload:FilterExpressionType){}
}

export class SortContent implements Action{
    readonly type = ContentActionTypes.SortContent;
    constructor(public payload:SortExpressionType){}
}


export type ContentActions = LoadContents |
ContentsLoaded|
FilterContent|
SortContent |
UpdateContent |
LoadUserContent |
UserContentLoaded