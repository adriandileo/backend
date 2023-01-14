const fs = require(`fs`) ;

class Producto{
  #productos=[]
  constructor(){
    this.id=0
  }
  evento(title,description,price,code,stock=25){
    this.id++
    const products={
      id:this.id,
      title,
      description,
      price,
      code,
      stock
    }
    this.#productos.push(products);
    
   }
   getProducts(){
    return this.#productos
   }
   getProductsById(id){
    const byId= this.#productos.filter(byId => byId.id===id )
    if(byId.length===0){
      return `Sin id: ${id}`
    }else{
    return byId }
   }
}


let addProducto= new Producto()
let title="Prueba"
let description="Producto de prueba"
let price=200
let code = "qq"

let title1="Prueba1"
let description1="Producto de prueba 1"
let price1=200
let code1 = "ee"

let title2="Prueba2"
let description2="Producto de prueba 2"
let price2=200
let code2 = "ww"

let title3="Prueba2"
let description3="Producto de prueba 2"
let price3=200
let code3 = "ww"

addProducto.evento(title,description,price,code)
addProducto.evento(title1,description1,price1,code1)
addProducto.evento(title2,description2,price2,code2)
addProducto.evento(title3,description3,price3,code3)

console.log(
addProducto.getProductsById(2),
addProducto.getProducts(),
)