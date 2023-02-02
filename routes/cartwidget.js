const {Router} = require('express')

const router=Router()

let cart=[]

router.get('/:cid',(req,res) => {
    const cid = req.params
    const cartParams= cart.filter(cart=>cart.id=== cid )
    res.json({message:cartParams})
})

router.post('/:cid/products/:pid',(req,res) => {
    const {pid, cid} = req.params

    const productPid= productos.find(productos=>productos.id===pid )
    const cartParams=cart.filter(cart=>cart.id=== cid )
    cart.push(cartParams.push(productPid))
    res.json({message:cart})
})

module.exports = router