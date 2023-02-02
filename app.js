const express = require('express')
const morgan = require('morgan')
const handlebars = requiere('express-handlebars')
const productosRoutes = require('./routes/productos')
const cartWidgetRoutes= require('./routes/cartwidget')
const port = 8000
const app=express()

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.engine('handlebars',handlebars.engine())
app.set('view',__dirname+'/view')
app.set('view engeniere','handlebars')
app.set(express.static(__dirname+'/public'))



app.use('/productos',productosRoutes)
app.use('/cart',cartWidgetRoutes)

app.listen(port,() =>{
    console.log(`Server running at port ${port}`)
})