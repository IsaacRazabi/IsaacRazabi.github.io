import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/item';
import { State } from '../../store/store';
import { Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { GetLoggedUser } from 'src/app/store/actions/user.actions';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Store } from '@ngrx/store';
import { Login, Logout, SaveUser  } from '../../store/actions/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  loggedUser$: Observable<User | null|undefined>;
  ll:any;
  isShow:Boolean= true;
  constructor(private router: Router, private route: ActivatedRoute,private store: Store<State>) {
    this.loggedUser$ = this.store.select('userState').pipe(pluck('loggedUser'))!;
  }
  ngOnInit(): void {
    this.store.dispatch(new GetLoggedUser());
  }
  findUser() {
    // this.loggedUser$.subscribe((user) => console.log(user));
  }
  toggleShow() {
    this.isShow = !this.isShow;
  }
    logout(){
      this.store.dispatch(new Logout());
      this.router.navigate(['home']);
    
}
}
