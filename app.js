const express = require('express')
const morgan = require('morgan')
const Server = require('socket.io')
const handlebars = require('express-handlebars')
//const __dirname = require('./util')
const productosRoutes = require('./routes/productos')
const cartWidgetRoutes= require('./routes/cartwidget')


const port = 8000
const app=express()

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))


app.engine('handlebars',handlebars.engine())
app.set('views',__dirname + '/view')
app.set('view engine','handlebars')
app.use(express.static(__dirname + '/public'))

app.listen(port,() =>{
    console.log(`Server running at port ${port}`)
})
//const httpServer=
//const socketServer= new Server (httpServer)


app.use('/productos',productosRoutes)
app.use('/cart',cartWidgetRoutes)


app.get('/',(req,res)=>{
    let  user = {
        name:"asda",
        lastname: "tere"
    }
    //res.json({message:user})
    res.render('index',user)
} )
