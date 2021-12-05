import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
// import {uploadService} from '../../services/upload_Service'
import { State } from '../../store/store';
import {LoadItem, LoadItems, RemoveItem} from '../../store/actions/item.actions';
import { Item } from '../../models/item';

@Component({
  selector: 'item-app',
  templateUrl: './item-app.component.html',
  styleUrls: ['./item-app.component.scss'],
  // providers:[uploadService]
})
export class ItemAppComponent implements OnInit {
  // @Output() uploadedData = new EventEmitter<[]>();
  items$: Observable<Item[]>;
  item$: Observable<Item | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  addingNew = false;
  files: File[] = [];
  uploadedItems:any=[];
  filterBy: string = '';

    //connecting to store and getting specific properties
  //pluck : take a property of object
  // constructor(private store: Store<State> ,private _uploadService:uploadService) {
    constructor(private store: Store<State>) {
    this.items$ = this.store.select('itemState').pipe(pluck('items'));
    this.item$ = this.store.select('itemState').pipe(pluck('item'));
    this.isLoading$ = this.store.select('itemState').pipe(pluck('isLoading'));
    this.error$ = this.store.select('itemState').pipe(pluck('error'));
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadItems(this.filterBy));
  }
  removeItem(itemId :string) {
    this.store.dispatch(new RemoveItem(itemId));
  }
  editItem(itemId :string) {
    this.store.dispatch(new LoadItem(itemId));
  }  
//   onSelect(event:any) {
//     console.log(event);
//     this.files.push(...event.addedFiles);
//   }
  
//   onRemove(event:any) {
//     console.log(event);
//     this.files.splice(this.files.indexOf(event), 1);
//   }
//   onUpload(){
//     if(!this.files[0]){
//       alert('upload some files first ')
//     }
//     const file_data = this.files[0];
// const data = new FormData();
// data.append('file',file_data);
// data.append('upload_preset','wtjy3eil');
// data.append('cloud_name','dg6yaccvn');
// this._uploadService.uploadImage(data).subscribe((response:any)=>{
//   if(response) console.log(response);
//   this.uploadedItems.push(response.secure_url);
//   // this.uploadedData.emit(this.uploadedItems)
// })
//   }
}


