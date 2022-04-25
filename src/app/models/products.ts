export interface Product {
  //interface
  _id:string,
  name:string,
  description:string,
  additionnal_info?:string,
  vendor_info?:string,
  reviews?:string,
  color?:string[],
  size?:string,
  stock?:string,
  categrie:string[],
  imageUrl:string[],
  sold_price:number,
  regular_price:number,
  created_at : string,
  updated_at:string,
  slug?:string ,
  //interrogation veut dire que c'est pas obligatoire

}
