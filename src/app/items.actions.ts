import { Action } from '@ngrx/store';
import { Items } from './Items';

export enum ItemsActionTypes {
  LoadItemss = '[Items] Load Itemss',
  LoadItemssSuccess = '[Items] Load Itemss Success',
  LoadItemssFailure = '[Items] Load Itemss Failure',
}

export class LoadItemss implements Action {
  readonly type = ItemsActionTypes.LoadItemss;
  
}

export class LoadItemssSuccess implements Action {
  readonly type = ItemsActionTypes.LoadItemssSuccess;
                                      //changes
  constructor(public payload: { data: Items[] }) { }
}

export class LoadItemssFailure implements Action {
  readonly type = ItemsActionTypes.LoadItemssFailure;
  constructor(public payload: { error: string }) { }
}

export type ItemsActions = LoadItemss | LoadItemssSuccess | LoadItemssFailure;

