import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Store } from '@ngrx/store';
import { Login, Logout, SaveUser  } from '../../store/actions/user.actions';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/item';
import { State } from '../../store/store';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

// interface signUpCredentials {
//   username: any,
//   password: any,
//   fullname: any,
//   isAdmin:boolean,
// }
export class LoginComponent implements OnInit {
  credentials :any= {
    username: "",
    password: "",
    fullname: "",
    isAdmin: false,
  };
  signUpCredentials:any= {
    username: "",
    password: "",
    fullname: "",
    isAdmin: false,
  };
  modalOpen:Boolean  =true;
  loggedInUser = false; 
  loggedUser$: Observable<User|null|undefined>;
  constructor(private router: Router, private route: ActivatedRoute,private store: Store<State>) { 
    this.loggedUser$ = this.store.select('userState').pipe(pluck('loggedUser'));

  }

  ngOnInit(): void {
  }
  login(){
    this.store.dispatch(new Login (this.credentials));
    this.router.navigate(['home']);
  }
async  signup(){
await this.store.dispatch(new SaveUser (this.signUpCredentials));
await this.store.dispatch(new Login (this.signUpCredentials));
this.router.navigate(['home']);
}

logout(){
  this.store.dispatch(new Logout());
  this.router.navigate(['home']);
}

  
  closeModal(){
    this.modalOpen = false
    this.router.navigate(['home']);
      }
}
