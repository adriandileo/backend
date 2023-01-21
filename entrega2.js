import  express  from 'express'

const productos = [
    {
        id : 1,
        title:"Prueba",
        description:"Producto de prueba",
        price:200,
        code : "qq"
    },
    {
        id : 2,
        title:"Prueba",
        description:"Producto de prueba",
        price:200,
        code : "qq"
    },
    {
        id : 3,
        title:"Prueba",
        description:"Producto de prueba",
        price:200,
        code : "qq"
    },
    {
        id : 4,
        title:"Prueba",
        description:"Producto de prueba",
        price:200,
        code : "qq"
    }
]


const app= express()


app.get('/Productos',(req,res) => {
    const {limit} = req.query
    if(!limit)res.send(productos)
    const limitproducto = productos.filter(productos => productos.id === limit )
    res.send(limitproducto)
})



app.get('/Productos/:pid',(req,res)=>{
    const {pid} = req.params
    const paramsid = productos.filter(productos=>productos.id=== Number(pid) )
    res.json(paramsid)
})

app.listen(8080,()=>console.log("Listo para recibir peticiones"))