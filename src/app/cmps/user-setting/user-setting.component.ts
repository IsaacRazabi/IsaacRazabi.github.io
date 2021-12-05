import { ItemListComponent } from '../item-list/item-list.component';
import { Component, OnInit,Output,EventEmitter ,Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
// import {uploadService} from '../../services/upload_Service'
import { State } from '../../store/store';
import {LoadItem, LoadItems, RemoveItem} from '../../store/actions/item.actions';
import { Item } from '../../models/item';
import { User } from 'src/app/models/item';
@Component({
  selector: 'user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
  // @Input() items: Item[] | null = [];
  // @Input() item: Item | null = null;
  // @Input() uploadedData:[]=[];
  loggedUser$: Observable<User | null|undefined>;
  filterBy: string = '';
  items$: Observable<Item[]>;
  items:Item[]=[];
  loggedUser:User={
    username: "",
    password: "",
    fullname: "",
    isAdmin: false,
  } ;
  // userPost:Boolean= this.loggedUser.fullname===this?item?.by?.fullname;
  img ='https://random.imagecdn.app/500/150 ';
  constructor(private store: Store<State>) {
    this.items$ = this.store.select('itemState').pipe(pluck('items'));
    this.items$.subscribe((user:any)=>{
      this.items=user
    })
    this.loggedUser$ = this.store.select('userState').pipe(pluck('loggedUser'))!;
   }

  ngOnInit(): void {
    this.store.dispatch(new LoadItems(this.filterBy));
    this.loggedUser$.subscribe((user:any)=>{
      this.loggedUser=user
    })
  }

}
