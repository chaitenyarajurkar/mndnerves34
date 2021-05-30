import { Action } from '@ngrx/store';
import { Items } from './Items';
import { ItemsActions, ItemsActionTypes } from './items.actions';

//namechange
export const itemsFeatureKey = 'itemsState';

export interface State {

  //model and error 
  items: Items[],
  error: string
}

export const initialState: State = {
  //change
  items: [
    {"orderno": "saasss", "date": "2021-05-19", "name": "sdsdd", "amount": 45455
  }],
  error: ''
};
//changes
export function reducer(state = initialState, action: ItemsActions): State {
  switch (action.type) {
    case ItemsActionTypes.LoadItemss:
      return { ...state }
    case ItemsActionTypes.LoadItemssSuccess:
      return {
        ...state,
        items: action.payload.data,
        error: ''
      }
    case ItemsActionTypes.LoadItemssFailure:
      return {
        ...state,
        items: [],
        error: action.payload.error
      }
    default:
      return state;
  }
}
