import { Action } from '@ngrx/store';
//Actions express unique events that happen throughout your application
import { Item, User } from 'src/app/models/item';

//variables for log information
export const SET_LOADING = '[item] loading';
export const SET_ERROR = '[item] error';
export const LOAD_ITEMS = '[item]s load';
export const LOAD_ITEM = '[item] load';
export const LOADED_ITEM = '[item] loaded';
export const LOADED_ITEMS = '[item]s loaded';
export const REMOVE_ITEM = '[item] remove';
export const REMOVED_ITEM = '[item] removed';
export const SAVE_ITEM = '[item] saved';
export const ADDED_ITEM = '[item] added';
export const UPDATED_ITEM = '[item] updated';

// export const ADDED_USER = '[user] added';
// export const SAVE_USER = '[user] saved';
// export const UPDATED_USER = '[user] updated';
// export const LOADED_USER = '[user] loaded';
// export const REMOVED_USER = '[user] removed';
// export const LOAD_USERS = '[user]s load';
// export const LOAD_USER = '[user] load';
// export const LOADED_USERS = '[user]s loaded';
// export const REMOVE_USER = '[user] remove';



export type ItemAction = LoadItems | LoadItem | RemoveItem | SaveItem;
// export type UserAction = LoadUsers | LoadUser | RemoveUser | SaveUser

//action doesn't actually perform , just arrange the data 
// as usual inside the constructor params : the input for the action
//readonly : type script creature: cant be changed
export class LoadItems implements Action {
  readonly type = LOAD_ITEMS;
  constructor(public filterBy: string = '') {}
}
export class LoadItem implements Action {
  readonly type = LOAD_ITEM;
  constructor(public itemId: string = '') {}
}
export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public itemId: string) {}
}
// when reducer gets it - he will push it to the store
export class LoadedItems implements Action {
  readonly type = LOADED_ITEMS;
  constructor(public items: Item[] = []) {}
}
export class LoadedItem implements Action {
  readonly type = LOADED_ITEM;
  constructor(public item: Item) {}
}
export class RemovedItem implements Action {
  readonly type = REMOVED_ITEM;
  constructor(public itemId: string) {}
}
export class SaveItem implements Action {
  readonly type = SAVE_ITEM;
  constructor(public item: Item) {}
}
export class AddedItem implements Action {
  readonly type = ADDED_ITEM;
  constructor(public item: Item) {}
}
export class UpdatedItem implements Action {
  readonly type = UPDATED_ITEM;
  constructor(public item: Item) {}
}
export class LoadingItems implements Action {
  readonly type = SET_LOADING;
  constructor(public isLoading: boolean = true) {}
}
export class ItemError implements Action {
  readonly type = SET_ERROR;
  constructor(public error: string) {}
}


// export class AddedUser implements Action {
//   readonly type = ADDED_USER;
//   constructor(public user: User) {}
// }
// export class SaveUser implements Action {
//   readonly type = SAVE_USER;
//   constructor(public user: User) {}
// }
// export class RemoveUser implements Action {
//   readonly type = REMOVED_USER;
//   constructor(public user: User) {}
// }
// export class UpdatedUser implements Action {
//   readonly type = UPDATED_USER;
//   constructor(public user: User) {}
// }
// export class LoadedUser implements Action {
//   readonly type = LOADED_USER;
//   constructor(public user:User) {}
// }

// export class LoadUsers implements Action {
//   readonly type = LOAD_USERS;
//   constructor(public user:User) {}
// }

// export class LoadUser implements Action {
//   readonly type = LOAD_USER;
//   constructor(public user:User) {}
// }

// export class LoadedUsers implements Action {
//   readonly type = LOADED_USERS;
//   constructor(public user:User) {}
// }

// export class RemovedUser implements Action {
//   readonly type = REMOVED_USER;
//   constructor(public user:User) {}
// }


