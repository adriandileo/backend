import fs from 'fs';

const path = './entrega1.json'

class Producto{
  #productos=[]

  
  constructor(){
    this.id=0
  }
  
//                              Subir Productos                                
    async producto(title,description,price,code,stock=25){
        
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

async addProduct(){
        try{
        const exist=  fs.existsSync(path)  
        if(exist,path.length===this.#productos.length){
            
            const see = await fs.promises.readFile(path,JSON.stringify(this.#productos))
             
         }
        else {
            const add = await fs.promises.writeFile(path,JSON.stringify(this.#productos))
            return add 
         }
         }
        catch (error){
            return(error)
        }
    }

//                              Productos
   async getProducts(){
    const read = await fs.promises.readFile(path,'utf-8')
    const stryng = JSON.parse(read)
    return console.log(stryng)
   }

//                              Un Producto
   async getProductsById(id){
    const read = await fs.promises.readFile(path,'utf-8')
    const stryng = JSON.parse(read)
    const byId= stryng.filter(byId => byId.id===id)
    if(byId.length===0){
        return console.log(`sin ID: ${id}` )
    }else{

        return console.log(byId)
    }}
    async deleteAll(){
    const exist=  fs.existsSync(path)  
        if(exist){
    const borrar = await fs.promises.unlink(path)
    
    return borrar}
    else{
        return console.log("nada")
    }
}}


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


// JSON
addProducto.producto(title,description,price,code)
addProducto.producto(title1,description1,price1,code1)
addProducto.producto(title2,description2,price2,code2)
addProducto.producto(title3,description3,price3,code3)
//addProducto.addProduct()
//addProducto.getProducts()
//addProducto.getProductsById(2)
//addProducto.deleteById(1)
//addProducto.upDateProducts(3,price)
//addProducto.getProducts()
addProducto.deleteAll() 

console.log()
export { Producto }


