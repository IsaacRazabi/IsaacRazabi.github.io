// import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { User} from '../models/user';
// import { Observable, from } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { Item ,rawItem} from '../models/item';
// import { LoadingItems } from '../store/actions/item.actions';
// import { ItemState } from '../store/reducers/item.reducer';


// // import { socketService} from './socket.service'
// // import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'

// const STORAGE_KEY_LOGGED_USER = 'loggedUser'
// const SCORE_FOR_REVIEW = 10
// // var gWatchedUser = null;

// export const userService = {
//     login,
//     logout,
//     signup,
//     getUsers,
//     getById,
//     remove,
//     update,
//     getLoggedUser: getLoggedUser,
//     increaseScore,
//     addUserReview,
//     _makeId,
//     addUserOrder,
//     addUserStay
// }

// // window.userService = userService

// // Note: due to async, must run one by one...
// // userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 100, isAdmin: false})
// // userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 100, isAdmin: true})
// // userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 100})

// function getUsers() {
//     return storageService.query('user')
//     // return httpService.get(`user`)
// }

// async function getById(userId:any) {
//     const user = await storageService.get('user', userId)
//     // const user = await httpService.get(`user/${userId}`)
//     // gWatchedUser = user;
//     return user;
// }
// function remove(userId:any) {
//     return storageService.remove('user', userId)
//     // return httpService.delete(`user/${userId}`)
// }

// async function update(user:any) {
//     // user = await httpService.put(`user/${user._id}`, user)
//     // Handle case in which admin updates other user's details
//     if (getLoggedUser()._id === user._id) _saveLocalUser(user)
//     return user;
// }

// async function login(userCred:any) {
//     const users = await storageService.query('user')
//     const user = users.find(user => user.username === userCred.username)
//     // return _saveLocalUser(user)

//     // const user = await httpService.post('auth/login', userCred)
//     // socketService.emit('login', user._id);
//     if (user) return _saveLocalUser(user)
// }
// async function signup(userCred:any) {
//     // userCred.score = 100;
//     const user = await storageService.post('user', userCred)
//     // const user = await httpService.post('auth/signup', userCred)
//     // socketService.emit('set-user-socket', user._id);
//     return _saveLocalUser(user)
// }
// async function logout() {
//     sessionStorage.removeItem(STORAGE_KEY_LOGGED_USER)
//     // socketService.emit('unset-user-socket');
//     // return await httpService.post('auth/logout')
// }

// async function increaseScore(by = SCORE_FOR_REVIEW) {
//     const user = getLoggedUser()
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

// async function addUserReview(stat:any) {
//     const user = getLoggedUser()
//     if(!user.reviews) user.reviews=[]
//     user.reviews.push(stat.review)
//     await update(user)
//     return user.reviews
// }

// async function addUserOrder({order}:any) {
//     const user = getLoggedUser()
//     if(!user.orders) user.orders=[]
//     user.orders.push(order)
//     await update(user)
//     return user.orders
// }

// async function addUserStay({stay}:any) {
//     const user = getLoggedUser()
//     if(!user.stayes) user.stayes=[]
//     user.stayes.push(stay)
//     await update(user)
//     return user.stayes
// }




// function _saveLocalUser(user:any) {
//     sessionStorage.setItem(STORAGE_KEY_LOGGED_USER, JSON.stringify(user))
//     return user
// }

// function getLoggedUser() {
//     return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGED_USER) || 'null')
// }

// function _makeId(length = 5) {
//     var text = ''
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     for (var i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length))
//     }
//     return text
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from, of } from 'rxjs';
import { Item ,rawItem} from '../models/item';
import { LoadingItems } from '../store/actions/item.actions';
import { UserState } from '../store/reducers/user.reducer';
import { storageService } from './async-storage.service';
import { httpService } from './http.service'
import { User} from '../models/user';



const ENTITY = 'user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
STORAGE_KEY_LOGGED_USER = 'loggedUser';
SCORE_FOR_REVIEW = 10
  constructor(private store: Store<UserState>, private https: HttpClient) {
    // If empty - load test data to storage
    const users = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    if (!users || users.length === 0) {
      console.log('Empty');
    }
  }
  
 getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}

async  getById(userId:any) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)
    // gWatchedUser = user;
    return user;
}
 remove(userId:any) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

 update(user:User): Observable<User> {
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (this.getLoggedUser().id === user.id) this._saveLocalUser(user)
    return of(user)
}

 async login (userCred:any) {
    let users = await storageService.query('user');
    console.log(userCred)
    let userCredId = users.find((user:any)=> 
        user.user.password === userCred.user.password && user.user.fullname === userCred.user.fullname);  
    const user = users.find((user:any) => user.id === userCredId!.id);
    console.log(user);
    
    // return _saveLocalUser(user)

    // const user = await httpService.post('auth/login', userCred)
    // socketService.emit('login', user._id);
    if (user) return this._saveLocalUser(of(user))
    else { return console.log('no user')};    
}
// async login (userCred:any) {
//     const users = await storageService.query('user')
//     const user = users.find(user => user.id === userCred.id)
//     // return _saveLocalUser(user)

//     // const user = await httpService.post('auth/login', userCred)
//     // socketService.emit('login', user._id);
//     if (user) return from(this._saveLocalUser(user))
//     else { return console.log('no user')};    
// }
// async  signup(userCred:any) {
//     // userCred.score = 100;
//     const user = await storageService.post('user', userCred)
//     // const user = await httpService.post('auth/signup', userCred)
//     // socketService.emit('set-user-socket', user._id);
//     return this._saveLocalUser(user) 
// }
 signup(userCred:any) : Observable<User>  {
    // userCred.score = 100;
    // userCred.id = this._makeId()
    const user = from(storageService.post('user', userCred)); 
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.emit('set-user-socket', user._id);
    // this._saveLocalUser(user)
    return this._saveLocalUser(user)
//    return user  
}


async  logout() {
    sessionStorage.removeItem(this.STORAGE_KEY_LOGGED_USER)
    // socketService.emit('unset-user-socket');
    // return await httpService.post('auth/logout')
}

async  increaseScore(by = this.SCORE_FOR_REVIEW) {
    const user = this.getLoggedUser()
    user.score = user.score + by || by
    await this.update(user)
    return user.score
}

async  addUserReview(stat:any) {
    const user = this.getLoggedUser()
    if(!user.reviews) user.reviews=[]
    user.reviews.push(stat.review)
    await this.update(user)
    return user.reviews
}

async  addUserOrder({order}:any) {
    const user = this.getLoggedUser()
    if(!user.orders) user.orders=[]
    user.orders.push(order)
    await this.update(user)
    return user.orders
}

async  addUserStay({stay}:any) {
    const user = this.getLoggedUser()
    if(!user.stayes) user.stayes=[]
    user.stayes.push(stay)
    await this.update(user)
    return user.stayes
}




 _saveLocalUser(user:any) :Observable<User> {
     user.subscribe((user:any)=>{
         sessionStorage.setItem(this.STORAGE_KEY_LOGGED_USER, JSON.stringify(user))
     })
    return of(user)
}

 getLoggedUser() {
    return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGED_USER) || 'null')
}


getLoggedInUser() {
    const user =  JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGED_USER) || 'null');
    return of(user)
}

 _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
}
