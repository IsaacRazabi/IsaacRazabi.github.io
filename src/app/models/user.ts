import { Item } from "./item";

export interface User {
  id?:any,
    username: string,
    password:any,
    fullname: string,
    isAdmin: boolean,
    items?:Item[],
    item?:Item
  }