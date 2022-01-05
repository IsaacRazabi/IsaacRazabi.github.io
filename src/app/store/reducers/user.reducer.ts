// import { createReducer, on } from '@ngrx/store';
// import { login, signUp, logOut } from '../actions/user.actions';
// import { UserService } from 'src/app/services/user.service';
// import { User } from 'src/app/models/item';
 
// export interface userState {
//    users: User[];
//    user: User | null;
//     isLoading: boolean;
//     error: string;
//   }

// export const initialState = {
//     loggedUser : UserService.getLoggedUser(),
//     users: [],
// };
 
// const _counterReducer = createReducer(
//   initialState,
//   on(login, (state) => state),
//   on(signUp, (state) => state),
//   on(logOut, (state) => state)
// );
 
// export function counterReducer(state:any, action:any) {
//   return _counterReducer(state, action);
// }



import { SET_LOADING, LOADED_USERS, REMOVED_USER, ADDED_USER, UPDATED_USER, LOADED_USER, SET_ERROR,LOADED_LOGGED_USER,LOGOUT_USER } from '../actions/user.actions';
import { from, of } from 'rxjs';
import { UserService  } from 'src/app/services/user.service';
// import this vars from actions enable us to determent which change is needed on state.
import { User} from 'src/app/models/item';

// Creates a reducer function to handle state transitions.
// Reducer creators reduce the explicitness of reducer functions with switch statements.

// as mutations in vue(?)
//pluck from action aim here
// our state composed of : users,user,isLoading,error

export interface UserState {
  users: User[];
  user: User| null ;
  isLoading: boolean;
  error: string;
  loggedUser?:User|null
}

const initialState:UserState = {
  users: [],
  user: null,
  loggedUser:null,
  isLoading: false,
  error: ''
};

//this function will take care to return new state
export function reducer(state: UserState = initialState, action: any): UserState {
  switch (action.type) {
    case SET_LOADING: {
      //destructure from the state object , return new state by spreading the currant state
      // the actual change of the state by the reducer will take place depending on the action.type the is determend bu 
      //the action : the first chain on the state management . the reducer is the second one.
      //documentation: State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state
      // every change create a new state which allow angular to keep track on tree of changes :
      // some props have not changes during the state creation : so we have anew and old state and we can keep on the changes
      // similar to virtual dom on react ?
      //store is an observable that we can subscribe to it.
      const { isLoading } = action;
      console.log(`Reducer: Setting isLoading to ${isLoading}`);
      //the spread operator responsible for returned a new state (we cant change existing one).
      // maybe i can also try with object.assign
      return { ...state, isLoading, error: '' };
    } case SET_ERROR: {
      const { error } = action;
      console.log(`Reducer: Setting user error`, error);
      return { ...state, error, isLoading: false };
    } case LOADED_USERS: {
      console.log(action); // return from app.effects - return type+array from observable of query
      const { users } = action; // return from app.effects - return type+array from observable of query
      console.log(`Reducer: Setting loaded users (${users.length}) users`);
      return { ...state, users, isLoading: false, error: '' };
    } case LOADED_USER: {
      const { user } = action;
      console.log(`Reducer: Setting loaded user ${user.password}`);
      return { ...state, user, error: '' };
    } case REMOVED_USER: {
      const { userPassword } = action;
      console.log('Reducer: Removing user:', userPassword);
      const users = state.users.filter(user => user.password !== userPassword)
      return { ...state, users, error: '' };
    } case ADDED_USER: {
      const { user } = action; 
      console.log('Reducer: Adding user:', user);
      // const users = [...state.users, user];
      return { ...state,user:user, error: '' };
    } case UPDATED_USER: {
      const { user } = action;
      console.log('Reducer: Updating user:', user);
      const users = state.users.map(currUser => (currUser.password === user.password) ? user : currUser)
      return { ...state, users, user, error: '' };
    }
    case LOADED_LOGGED_USER: {
      const { user } = action; 
      let loggedUser;
      if (user) loggedUser=user.user
      console.log('Reducer: loading logged user:', user);
      // const users = [...state.users, user];
      return { ...state,loggedUser:user, error: '' };
    }
    case LOGOUT_USER: {
      const { user } = action; 
     let loggedUser=user
      console.log('Reducer: loading logged user:', user);
      // const users = [...state.users, user];
      return { ...state,loggedUser:loggedUser, error: '' };
    }
     default:
      return state;
  }
}
