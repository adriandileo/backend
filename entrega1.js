const fs = require (`fs`)
const { unlink } = require("fs/promises")
const { get } = require("http")

const path = './entrega1.json'

class Producto{
  #productos=[]
  
  constructor(){
    this.id=0
  }
    async addProduct(title,description,price,code,stock=25){
        
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
        try{
        const productos = this.#productos      
        if(productos.length===0){
            
            
            const see = await fs.promises.readFile(path,'utf-8')
            return see
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
   async getProducts(){
    const read = await fs.promises.readFile(path,'utf-8')
    const stryng = JSON.parse(read)
    return console.log(stryng)
   }
   async getProductsById(id){
    const read = await fs.promises.readFile(path,'utf-8')
    const stryng = JSON.parse(read)
    const byId= stryng.filter(byId => byId.id===id)
    if(byId.length===0){
        return console.log(`sin ID: ${id}` )
    }else{

        return console.log(byId)
    }}

    async upDateProducts(id,parametro){
        const read = await fs.promises.readFile(path,'utf-8')
        const stryng = JSON.parse(read)
        const byId= stryng.filter(byId => byId.id===id)

        if(byId.length===0){
            return 'sin ID: ${id}'
        }else{

            return console.log( byId)
        }
    }

    async deleteById(id){
        const read = await fs.promises.readFile(path,'utf-8')
        const parse = JSON.parse(read)
        const byId= JSON.stringify(parse.filter(byId => byId.id===id))
        try{

        if(byId.length===0){
            return 'sin ID: ${id}'
        }else{
            const objeto =  JSON.parse(byId)
            
            // const borrado = await fs.promises.unlink(objeto)
            const borrado = delete [`objeto`]
            return  console.log(borrado)

        }
        }catch(error) {
            return(error)
        }
    }


    async deleteAll(){

    const borrar = await fs.promises.unlink(path)
    
    return borrar
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



// this.#products
//addProducto.addProduct(title,description,price,code)
//addProducto.evento(title1,description1,price1,code1)
//addProducto.evento(title2,description2,price2,code2)
//addProducto.evento(title3,description3,price3,code3)

// JSON
//addProducto.addProduct(title,description,price,code)
//addProducto.addProduct(title1,description1,price1,code1)
//addProducto.addProduct(title2,description2,price2,code2)
//addProducto.addProduct(title3,description3,price3,code3)
//addProducto.getProducts()
//addProducto.getProductsById(2)
addProducto.deleteById(1)
addProducto.upDateProducts(3,price)
//addProducto.getProducts()
//addProducto.deleteAll() 

