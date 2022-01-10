import { Component, Input, OnInit ,
  EventEmitter,
  Output,
  ContentChild,
  Pipe,
  PipeTransform,
  SecurityContext,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Directive,
  Optional,} from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemListComponent } from '../item-list/item-list.component';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { State } from '../../store/store';
import { User } from 'src/app/models/item';
import { pluck } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Pipe({ name: 'keepHtml', pure: false })
export class EscapeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(content: any) {
    return this.sanitizer.sanitize(SecurityContext.HTML, content);
  }
}

@Component({
  selector: 'item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent implements OnInit {
  @Input() item: Item | null = null; //gets from father component : item-list
  loggedUser$: Observable<User | null>;
  itemImg: string='';
  longText:boolean=false;
  // img = this.item!.img ;
  
  img ='https://random.imagecdn.app/500/150 ';
myImage : string = 'https://random.imagecdn.app/500/150 ';
  strHtml: string = '';
  constructor(private itemList: ItemListComponent,private store: Store<State>) { 
    this.loggedUser$ = this.store.select('userState').pipe(pluck('user'))!;
  }
  ngOnInit(){
    this.generateImg()

    
    // if(!this.item?.img) this.item?.img!='https://random.imagecdn.app/500/150 '
  }

  generateImg() {
  //  this.itemImg = JSON.parse(JSON.stringify(this.item!.img));
    this.itemImg =  'https://random.imagecdn.app/500/150 ';
  }
  checkLongText(){
    if (this.item?.text?.length! <30 || this.item?.text?.length! === undefined) return true
    else {
      if (this.longText) return true
      else return false
    } 
  }
  showLongText(){
    this.longText=!this.longText;
    
  }
}
