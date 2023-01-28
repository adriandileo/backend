import  express  from 'express'
const port = 8080
const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


let productos = [
    {
        id : 1,
        title:"Prueba",
        description:"Producto de prueba",
        price:200,
        code : "qq"
    }
]


app.get('/api/Productos',(req,res) => {
    const {limit} = req.query
    if(!limit)res.send(productos)
    const limitproducto = productos.filter(productos => productos.id === limit )
    res.send(limitproducto)
})

app.post('/producto',(req,res)=>{
    let producto = req.body
    if(!producto.name||!producto.descripsion){
        return res.status(400).send({status:"error",error:"incompleto"})
    }
    productos.push(producto);
    res.send({status:"success",message:"Exito"})
    console.log(req.body)
})

app.put('/producto/:id',(res,req)=>{
    const id = req.params
    const infoProducto= req.body
    const productoID = productos.find(producto => productos.id===id) 
    console.log(infoProducto)
    
})


app.listen(8000,()=>console.log("Listo para recibir peticiones"))