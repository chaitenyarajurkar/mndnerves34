import { createFeatureSelector, createSelector } from '@ngrx/store';

import {State} from './items.reducer';
const getItemFeatureState=createFeatureSelector<State>('itemsState');
export const getItems=createSelector(
    getItemFeatureState,
    state=>state.items
)

export const getError=createSelector(
    getItemFeatureState,
    state=>state.error
)