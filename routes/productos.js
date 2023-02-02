const {Router} = require('express')

const router = Router()

let productos=[]
router.get('/',(req,res) => {

    res.json({message:productos})
})

router.post('/',(req,res)=>{
    const {title,description,code,price,stock,category}=req.body
    const producto={
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