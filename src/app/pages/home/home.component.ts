import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { State } from '../../store/store';
import {LoadItem, LoadItems} from '../../store/actions/item.actions';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items$: Observable<Item[]>;
  item$: Observable<Item | null>;
  loading:boolean=true;
  reload:boolean = true;
  filterBy: string = '';
  reloadCount:number=1;
  constructor(private store: Store<State>) {
    this.items$ = this.store.select('itemState').pipe(pluck('items'));
    this.item$ = this.store.select('itemState').pipe(pluck('item'));
  }
  ngOnInit(): void {    
    this.store.dispatch(new LoadItems());
    // this.componentDidMount()
    setTimeout(()=>{                      
      this.loading = false;
  }, 3000);
  this.store.dispatch(new LoadItems(this.filterBy));
 }
//  componentDidMount() {
//   this.reloadCount = Number(sessionStorage.getItem('reloadCount'));
//   console.log(this.reloadCount);
  
//   if(this.reloadCount! < 2) {
//     sessionStorage.setItem('reloadCount', String(this.reloadCount! + 1));
//       // window.location.reload();
//    setTimeout(() => {
//     window.location.reload();
//    }, 2000); 
//   } else {
//     sessionStorage.removeItem('reloadCount');
//   }
// }
}
