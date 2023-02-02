const {Router} = require('express')


const router = Router()

let productos=[]
router.get('/',(req,res) => {
    const {limit} = req.query
    if(!limit)res.send(productos)
    const limitproducto = productos.slice(0,limit )
    res.send(limitproducto)
})

//funciona, no se toca
router.get('/:pid',(req,res) => {

    const {pid} = req.params
    const productoPid= productos.find(productos => productos.id===Number(pid))
    res.json({message:productoPid})
})

//funciona, no se toca
router.post('/',(req,res)=>{
    const {title,description,code,price,stock,category}=req.body
    let id = 0
    const producto={
        id:id++,
        title,
        description,
        code,
        price,
        stock,
        category
    }
    productos.push(producto)
    res.json({message:producto})
})


router.put('/',(req,res)=>{
    res.json({message:`me muero muerto`})
})

module.exports = router