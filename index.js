const expres = require ('express')
const mongoose =require('mongoose')
require('dotenv').config()
const userRoutes=require('./src/routes/user')
const moliendasRoutes=require('./src/routes/molienda')
const presentacionRoutes=require('./src/routes/presentacion')
const variedadRoutes=require('./src/routes/variedad')
const productoRoutes=require('./src/routes/producto')

const app=expres()
const puerto= process.env.PORT || 9000

//midleware 
app.use(expres.json())
app.use('/api',userRoutes)
app.use('/api',moliendasRoutes)
app.use('/api',presentacionRoutes)
app.use('/api',variedadRoutes)
app.use('/api',productoRoutes)
//rutas
app.get("/",(req,res)=>{
    res.send("welcome")
})

//coneccion
mongoose.connect(process.env.mongodbUri).then(()=>console.log('Conectado a la BD'))
.catch((error)=>console.error(error))
app.listen(puerto,()=>console.log('conectado', puerto)) 