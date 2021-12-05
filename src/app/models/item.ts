
export interface Item {
  id?: string;
  name?: string;
  text?:string;
  itemType?: string;
  color?:string;
  importance?:string;
  img?:string;
  video?:string;
  by?:{
    fullname?:string;
    date?:any;
  }
}
export interface ItemState{
items:[Item]
}

export interface rawItem {
  name: Array<Item>
}

export interface User {
  id?:any
  username: string,
  password: any,
  fullname: string,
  isAdmin?: false,
  item?:Item,
  items?:Item[]
}