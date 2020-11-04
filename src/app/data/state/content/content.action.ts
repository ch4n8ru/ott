import { Action } from '@ngrx/store';
import { Content } from '../../models/content';
import { FilterExpressionType } from '../../models/filter';
import { SortExpressionType } from '../../models/sort';

export enum ContentActionTypes{
    LoadContents = "[Content] Load",
    ContentsLoaded = "[Content] Loaded",
    FilterContent = "[Content] Filter",
    SortContent = "[Content] Sort"
}

export class LoadContents implements Action{
    readonly type = ContentActionTypes.LoadContents;
    constructor(){}
}

export class ContentsLoaded implements Action{
    readonly type = ContentActionTypes.ContentsLoaded;
    constructor(public payload:Array<Content>){}
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
SortContent