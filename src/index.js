const expres = require ('express')
const mongoose =require('mongoose')
require('dotenv').config()
const userRoutes=require('./routes/user')

const app=expres()
const puerto= process.env.PORT || 9000

//midleware
app.use(expres.json())
app.use('/api',userRoutes)
//rutas
app.get("/",(req,res)=>{
    res.send("welcome")
})

//coneccion
mongoose.connect(process.env.mongodbUri).then(()=>console.log('Conectado a la BD'))
.catch((error)=>console.error(error))
app.listen(puerto,()=>console.log('conectado', puerto))