import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {uploadService} from '../../services/upload_Service'
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Item } from '../../models/item';
import { SaveItem } from '../../store/actions/item.actions';
import { UpdatedUser,SaveUser } from 'src/app/store/actions/user.actions';
import { State } from '../../store/store';
import { User } from 'src/app/models/item';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
  providers:[uploadService]
})



export class ItemEditComponent implements OnInit {
  loggedUser$: Observable<User | null|undefined>;
  loggedUser:User={
    username: "",
    password: "",
    fullname: "",
    isAdmin: false,
  } ;
  item$: Observable<Item | null>;
  item:Item = { id: '', name: '',text:'',img:'',video:'',by:{fullname:'',date:Date.now()} }
  modalOpen:Boolean  =true;
  @Output() saved = new EventEmitter();
  sub: Subscription | null = null;
  files: File[] = [];
  uploadedItems:any=[];

  constructor(private store: Store<State>,private _uploadService:uploadService) {
    this.item$ = this.store.select('itemState').pipe(pluck('item'));
    this.loggedUser$ = this.store.select('userState').pipe(pluck('loggedUser'))!;

  }
  closeModal(){
this.modalOpen = false

  }
  get itemEditState() {
    return (this.item.id)? 'Update' : 'Add'
  }

  ngOnInit(): void {
    this.sub = this.item$.subscribe(item => {
      if (item) this.item = JSON.parse(JSON.stringify(item))

    })

  }
 saveItem() {
this.store.dispatch(new SaveItem(this.item));
this.saved.emit();

this.loggedUser$.subscribe((user:any)=>{
  this.loggedUser=user
})
this.loggedUser.items?.push(this.item);
this.store.dispatch(new UpdatedUser(this.loggedUser));
// this.store.dispatch(new SaveUser(Object.assign(this.item)));
  }
  ngOnDestroy() {
    this.sub?.unsubscribe()
  }
  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onUpload(){
    if(!this.files[0]){
      // alert('upload some files first ')ף
      this.loggedUser$.subscribe((user:any)=>{
        this.loggedUser=user
      })
      this.loggedUser.items?.push(this.item);
      
      this.item.by!.fullname=this.loggedUser.fullname;
      this.store.dispatch(new SaveItem(this.item));
  this.saved.emit();

  return
    }
    const file_data = this.files[0];
const data = new FormData();
data.append('file',file_data);
data.append('upload_preset','wtjy3eil');
data.append('cloud_name','dg6yaccvn');
this._uploadService.uploadImage(data).subscribe((response:any)=>{
  if(response) console.log(response);
  this.uploadedItems.push(response.secure_url);
  this.item.img = this.uploadedItems[0];
 
  this.loggedUser$.subscribe((user:any)=>{
    this.loggedUser=user
  })
  this.loggedUser.items?.push(this.item);
  this.item.by!.fullname=this.loggedUser.fullname;

this.item.by!.date=Date.now();
  this.store.dispatch(new UpdatedUser(this.loggedUser));


  this.store.dispatch(new SaveItem(this.item));
  this.saved.emit();
})

  }
  
}
