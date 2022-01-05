import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';
import {
  ItemAction,
  SAVE_ITEM,
  ADDED_ITEM,
  UPDATED_ITEM,
  LOAD_ITEMS,
  LOADED_ITEMS,
  REMOVE_ITEM,
  REMOVED_ITEM,
  LOAD_ITEM,
  LOADED_ITEM,
  SET_ERROR,
} from './actions/item.actions';
import {
  UserAction,
  ADDED_USER,
  SAVE_USER,
  UPDATED_USER,
  LOADED_USER,
  REMOVED_USER,
  LOAD_USER,
  GET_LOGGED_USER,
  LOADED_LOGGED_USER,
  LOGIN,
  LOGOUT,
  LOGOUT_USER
} from './actions/user.actions'
// the actual response to the component dispatch as vue actions
@Injectable()
export class AppEffects {
  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_ITEMS),
      switchMap(
        (
          action //a kind of filter : only wants data in pipe regarding loading items
        ) =>
          this.itemService.realQuery().pipe(
            map((items) => ({
              // this is the finale data on loadItems$ observable pipe , that will go back to reducer that will update the store
              type: LOADED_ITEMS,
              items,
              log:console.log(items)        
            })),
            catchError((error) => {
              console.log('Effect: Caught error ===> Reducer', error);
              return of({
                type: SET_ERROR,
                error: error.toString(),
              });
            })
          )
      )
    );
  });
  loadItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_ITEM),
      tap(() => console.log('Effects: load item ==> service')),
      switchMap((action) =>
        this.itemService.getById(action.itemId, action.itemId).pipe(
          tap(() => console.log('Effects: Got item from service ===> Reducer')),
          map((item) => ({
            type: LOADED_ITEM,
            item,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error);
            return of({
              type: SET_ERROR,
              error: error.toString(),
            });
          })
        )
      )
    );
  });
  removeItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(REMOVE_ITEM),
      switchMap((action) =>
        this.itemService.remove(action.itemId, action.itemId).pipe(
          tap(() =>
            console.log('Effects: Item removed by service ===> Reducer')
          ),
          map(() => ({
            type: REMOVED_ITEM,
            itemId: action.itemId,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error);
            return of({
              type: SET_ERROR,
              error: error.toString(),
            });
          })
        )
      )
    );
  });
  saveItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SAVE_ITEM),
      switchMap((action) =>
        this.itemService.save(action.item).pipe(
          tap(() =>
            console.log(
              'Effects: Item saved by service, inform the ===> Reducer'
            )
          ),
          map((savedItem) => ({
            type: action.item.id ? UPDATED_ITEM : ADDED_ITEM,
            item: savedItem,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error);
            return of({
              type: SET_ERROR,
              error: error.toString(),
            });
          })
        )
      )
    );
  });

  //ה-ACTIN עצמו הוא צינור שהאפקט מאזין לו . 
  // ככה שכל פעם שנזרק דיסאפצ , כלומר שנורה action
  // ה-אפקט יוכ להאזין לו ולהגיב בהתאם
  // הזיהוי נעשה באמצעות האופרטור של typeOf


  saveUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SAVE_USER),
      switchMap((action) =>
      this.userService.signup(action).pipe(
          tap(() =>
            console.log(
              'user signed',action.user
            )
          ),
          map(() => ({
            type: action.user.fullname ? UPDATED_USER : ADDED_USER,
            // type: ADDED_USER,
            user: action.user
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error);
            return of({
              type: SET_ERROR,
              error: error.toString(),
            });
          })
        )
      )
    );
  });

  getLoggedUser$= createEffect(() => {
    return this.actions$.pipe(
      ofType(GET_LOGGED_USER),
      tap(() => console.log('Effects: load user ==> service')),
      switchMap(() =>
        this.userService.getLoggedInUser().pipe(
          tap(() => console.log('Effects: Got logged user from service ===> Reducer')),
          map((user) => ({
            type: LOADED_LOGGED_USER,
            user,
            check : console.log(user)
            
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error);
            return of({
              type: SET_ERROR,
              error: error.toString(),
            });
          })
        )
      )
    );
  });

  login$= createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGIN),
      tap(() => console.log('Effects: load user ==> service')),
      switchMap((action) =>
        from(this.userService.login(action)).pipe(
          tap(() => console.log('Effects: Got login user from service ===> Reducer',action)),
          map((user) => ({
            type: LOADED_LOGGED_USER,
            user: {user:action.user},   
            check : console.log({user:action.user})
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error);
            return of({
              type: SET_ERROR,
              error: error.toString(),
            });
          })
        )
      )
    );
  });

  logout$= createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGOUT),
      tap(() => console.log('Effects: load user ==> service')),
      switchMap((action) =>
        from(this.userService.logout()).pipe(
          tap(() => console.log('Effects: Got logout user from service ===> Reducer',action)),
          map((user) => ({
            type: LOGOUT_USER,
            user:null,   
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error);
            return of({
              type: SET_ERROR,
              error: error.toString(),
            });
          })
        )
      )
    );
  });


  // updateUser$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(UPDATED_USER),
  //     switchMap((action) =>
  //     this.userService.update(action).pipe(
  //         tap(() =>
  //           console.log(
  //             'user signed',action
  //           )
  //         ),
  //         catchError((error) => {
  //           console.log('Effect: Caught error ===> Reducer', error);
  //           return of({
  //             type: SET_ERROR,
  //             error: error.toString(),
  //           });
  //         })
  //       )
  //     )
  //   );
  // });
  constructor(
    private actions$: Actions<ItemAction|UserAction>,
    private itemService: ItemService,
    private userService: UserService
  ) {}
}
