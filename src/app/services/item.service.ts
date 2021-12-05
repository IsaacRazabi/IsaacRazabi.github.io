import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from, of } from 'rxjs';
import { Item ,rawItem} from '../models/item';
import { LoadingItems } from '../store/actions/item.actions';
import { ItemState } from '../store/reducers/item.reducer';

import { storageService } from './async-storage.service';

const ENTITY = 'item';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items:Item[]=[];
  constructor(private store: Store<ItemState>, private https: HttpClient) {
    // If empty - load test data to storage
    // const items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    this.items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    // if (!items || items.length === 0) {
    //   console.log('Empty');
    //   localStorage.setItem(ENTITY, JSON.stringify(this.createItems()));
    // }
  }
  query(filterBy = ''): Observable<Item[]> {
    this.store.dispatch(new LoadingItems());
    // casting : the promise entity [] to item as define on module. form can change promise to Observable
    //only if we first cast it as promise of item

    return from(storageService.query(ENTITY) as Promise<Item[]>);
  }
  realQuery(): Observable<Item[]> {
    let realItem = this.https.get(
      'https://retoolapi.dev/NLfiGD/data'
      // "https://philosophyapi.herokuapp.com/api/books/"
    );
    let data = realItem.subscribe(res=>{
      // const items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
      if (!this.items || this.items.length === 0) {
        if(res===undefined) JSON.parse(localStorage.getItem(ENTITY) || 'null');
        else{return localStorage.setItem(ENTITY,JSON.stringify(res))}
      }
        else{
          return this.items 
        }
        //a bad way to keep data to edit data fro server. edit should check if to 
        //edit from store array ! 
      })
      // const items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    return of(this.items)
  }

  getById(itemId: string , id:string): Observable<Item> {
    id = itemId;
    return from(storageService.get(ENTITY, id) as Promise<Item>);
  }
  remove(itemId: string, id:string): Observable<boolean> {
    id = itemId;
    return from(storageService.remove(ENTITY, id));
  }

  save(item: Item): Observable<Item> {
    const method = item.id ? 'put' : 'post';
    const prmSavedItem = storageService[method](ENTITY, item);
    return from(prmSavedItem) as Observable<Item>;
  }

  private createItems(): Item[] {
    return ['Vue', 'Angular', 'React', 'Redux', 'NGRX', 'Vuex'].map((name) => ({
      id: storageService.makeId(),
      name,
    }));
  }
  get emptyItem(): Item {
    return {
      id: '',
      name: '',
    };
  }
  getRawData(): any {
    let data:any = [
      {
      "Home-Work" : [
        {
          "id": 8,
          "name": "Angular practice",
          "color": "#e8741e",
          "importance": 3
          },
          {
          "id": 9,
          "name": "vue practice",
          "color": "#344759",
          "importance": 4
          },
          {
          "id": 10,
          "name": "react practice",
          "color": "#8e6e95",
          "importance": 5
          },
      ]
    },
      { "Finance":[
        {
          "id": 1,
               "name": "take loan",
               "color": "#39a59c",
               "importance": 4
               },
          {
               "id": 3,
               "name": "go to the bank",
               "color": "#39a59c",
               "importance": 1
               },
               {
                "id": 5,
                "name": "buy shares",
                "color": "#e8741e",
                "importance": 2
                },
      ]},
      {
     "others" :[
      {
        "id": 2,
        "name": "clean car",
        "color": "#39a59c",
        "importance": 1
        },
        {
        "id": 12,
        "name": "go to the bank",
        "color": "#e8741e",
        "importance": 2
        },
       {"Shopping-list":[
        {
          "id": 4,
          "name": "buy cheese",
          "color": "#344759",
          "importance": 4
          },
       ]}
     ]
    
    }
     ,
      ]
      return data
  }
}
