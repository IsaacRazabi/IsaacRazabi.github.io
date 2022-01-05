import { SET_LOADING, LOADED_ITEMS, REMOVED_ITEM, ADDED_ITEM, UPDATED_ITEM, LOADED_ITEM, SET_ERROR } from '../actions/item.actions';
// import this vars from actions enable us to determent which change is needed on state.
import { Item, User } from 'src/app/models/item';

// Creates a reducer function to handle state transitions.
// Reducer creators reduce the explicitness of reducer functions with switch statements.

// as mutations in vue(?)
//pluck from action aim here
// our state composed of : items,item,isLoading,error

export interface ItemState {
  items: Item[];
  item: Item | null;
  isLoading: boolean;
  error: string;
}

const initialState: ItemState = {
  items: [],
  item: null,
  isLoading: false,
  error: ''
};

//this function will take care to return new state
export function reducer(state: ItemState = initialState, action: any): ItemState {
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
      console.log(`Reducer: Setting item error`, error);
      return { ...state, error, isLoading: false };
    } case LOADED_ITEMS: {
      console.log(action); // return from app.effects - return type+array from observable of query
      const { items } = action; // return from app.effects - return type+array from observable of query
      // console.log(`Reducer: Setting loaded items (${items.length}) items`);
      return { ...state, items, isLoading: false, error: '' };
    } case LOADED_ITEM: {
      const { item } = action;
      console.log(`Reducer: Setting loaded item ${item.id}`);
      return { ...state, item, error: '' };
    } case REMOVED_ITEM: {
      const { itemId } = action;
      console.log('Reducer: Removing item:', itemId);
      const items = state.items.filter(item => item.id !== itemId)
      return { ...state, items, error: '' };
    } case ADDED_ITEM: {
      const { item } = action;
      console.log('Reducer: Adding item:', item);
      const items = [...state.items, item]
      return { ...state, items, error: '' };
    } case UPDATED_ITEM: {
      const { item } = action;
      console.log('Reducer: Updating item:', item);
      const items = state.items.map(currItem => (currItem.id === item.id) ? item : currItem)
      return { ...state, items, item: null, error: '' };
    } default:
      return state;
  }
}
