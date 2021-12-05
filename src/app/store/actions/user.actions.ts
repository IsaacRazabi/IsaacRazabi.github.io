import { createAction, props } from '@ngrx/store';
// import { SignUpCredentials } from 'src/app/login/login.component'; 
import { Action } from '@ngrx/store';
//Actions express unique events that happen throughout your application
import { Item, User } from 'src/app/models/item';

export const ADDED_USER = '[user] added';
export const SAVE_USER = '[user] saved';
export const UPDATED_USER = '[user] updated';
export const LOADED_USER = '[user] loaded';
export const REMOVED_USER = '[user] removed';
export const LOAD_USERS = '[user]s load';
export const LOAD_USER = '[user] load';
export const LOADED_USERS = '[user]s loaded';
export const REMOVE_USER = '[user] remove';
export const SET_ERROR = '[user] error';
export const SET_LOADING = '[user] loading';
export const GET_LOGGED_USER = '[user] get logged ';
export const LOADED_LOGGED_USER = '[user] logged loaded ';
export const LOGIN = '[user] login';


export type UserAction = LoadUsers | LoadUser | RemoveUser | SaveUser | GetLoggedUser |Login

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public user:User) {}
}

export class GetLoggedUser implements Action {
  readonly type = GET_LOGGED_USER;
  constructor() {}
}
export class LoadedLoggedUser implements Action {
  readonly type = LOADED_LOGGED_USER;
  constructor(public user:User) {}
}

export class AddedUser implements Action {
    readonly type = ADDED_USER;
    constructor(public user: User) {}
  }
  export class SaveUser implements Action {
    readonly type = SAVE_USER;
    constructor(public user: User) {}
  }
  export class RemoveUser implements Action {
    readonly type = REMOVED_USER;
    constructor(public user: User) {}
  }
  export class UpdatedUser implements Action {
    readonly type = UPDATED_USER;
    constructor(public user: User) {}
  }
  export class LoadedUser implements Action {
    readonly type = LOADED_USER;
    constructor(public user:User) {}
  }
  
  export class LoadUsers implements Action {
    readonly type = LOAD_USERS;
    constructor(public user:User) {}
  }
  
  export class LoadUser implements Action {
    readonly type = LOAD_USER;
    constructor(public user:User) {}
  }
  
  export class LoadedUsers implements Action {
    readonly type = LOADED_USERS;
    constructor(public user:User) {}
  }
  
  export class RemovedUser implements Action {
    readonly type = REMOVED_USER;
    constructor(public user:User) {}
  }
  export class UserError implements Action {
    readonly type = SET_ERROR;
    constructor(public error: string) {}
  }
  export class LoadingUsers implements Action {
    readonly type = SET_LOADING;
    constructor(public isLoading: boolean = true) {}
  }

// export const signUp = createAction('[user] SignUp', props<{ signUpCredentials:any }>());
// export const login = createAction('[user] Login');
// export const logOut = createAction('[user] LogOut');