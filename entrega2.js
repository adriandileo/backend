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
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let users = []

app.post('/api/user',(res,req)=>{
    let user = req.body
    if(!user.first||!user.lastName){
        return res.status(400).send({status:"error",error:"Incomplete Values"})
    }
    user.push(user)
    res.status({status:"succes",message:"user created"})
}
)

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

app.get('/user',(res,req)=>{
    const {id} = req.query
    const filterUser = productos.filter(user=>user.id===id)
    if(filterUser.length===0)res.status.json({error:'Usuario no encontrado'})
    res.status(200).json({message:filterUser})
})


app.listen(8080,()=>console.log("Listo para recibir peticiones"))