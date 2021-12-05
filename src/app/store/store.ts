import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as itemModule from './reducers/item.reducer';
import * as userModule from './reducers/user.reducer';

import { environment } from '../../environments/environment';

export interface State {
  itemState: itemModule.ItemState;
  userState: userModule.UserState;
}

export const reducers: ActionReducerMap<State> = {
  itemState: itemModule.reducer,
  userState: userModule.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
