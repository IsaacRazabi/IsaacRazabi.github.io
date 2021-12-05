import { Component, Input, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { State } from '../../store/store';
import { User } from 'src/app/models/item';
import { pluck } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[] | null = [];
  @Input() uploadedData:[]=[];
  @Output() removed = new EventEmitter<string>()
  @Output() edited = new EventEmitter<string>()
  loggedUser$: Observable<User | null>;
  loggedUser:User={
    username: "",
    password: "",
    fullname: "",
    isAdmin: false,
  } ;
  // type:Array<string> = this.items!.map((el:string)=>el.itemType)
  constructor(private store: Store<State>) {
    this.loggedUser$ = this.store.select('userState').pipe(pluck('user'))!;
  }

  ngOnInit() {
    this.loggedUser$.subscribe((user:any)=>{
      this.loggedUser=user
    })
  }
  removeItem(itemId: string) {
    this.removed.emit(itemId)
  }
  editItem(itemId: string) {
    this.edited.emit(itemId)
  }
}
