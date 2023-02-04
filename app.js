const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const productosRoutes = require('./routes/productos')
const cartWidgetRoutes= require('./routes/cartwidget')
const Server = require('socket.io')

const port = 8000
const app=express()
//const httpServer=
app.listen(port,() =>{
    console.log(`Server running at port ${port}`)
})

//const socketServer= new Server (httpServer)


app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.engine('handlebars',handlebars.engine())
app.set('view',__dirname +'/view')
app.set('view engeniere','handlebars')
app.use(express.static(__dirname+'/public'))



app.use('/productos',productosRoutes)
app.use('/cart',cartWidgetRoutes)


app.get('/',(req,res)=>{
    let  user = {
        name:"asda",
        lastname: "tere"
    }
    // res.json({message:user})
    res.render('index.handlebars',{})
} )
