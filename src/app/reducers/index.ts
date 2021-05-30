import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromItems from '../items.reducer';


export interface State {

  [fromItems.itemsFeatureKey]: fromItems.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromItems.itemsFeatureKey]: fromItems.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
