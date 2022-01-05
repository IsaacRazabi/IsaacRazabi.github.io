import { Item } from "./item";

export interface User {
  id?:any,
    username: string,
    password:any,
    fullname: string,
    isAdmin: boolean,
    items?:Item[],
    item?:Item
    user?:{  id?:any
      username: string,
      password: any,
      fullname: string,
      isAdmin?: false,
      item?:Item,
      items?:Item[],},
  }