const express= require('express')
const esquema= require('../models/variedad')

const routev= express.Router()

//crear variedad
routev.post('/variedad',(req,res)=>{
    const variedad= esquema(req.body)
    variedad.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//obtener variedad
routev.get('/variedad',(req,res)=>{
    esquema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//busca variedad
routev.get('/variedad/:id',(req,res)=>{
    const{id}=req.params;
    esquema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//actualizar variedad
routev.put('/variedad/:id',(req,res)=>{
    const{id}=req.params;
    const{nombre,descripcion,variedad,puntiacion,productor,finca,altura,proceso,notas}=req.body
    esquema
    .updateOne({_id:id},{$set:{nombre,descripcion,variedad,puntiacion,productor,finca,altura,proceso,notas}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar variedad
routev.delete('/variedad/:id',(req,res)=>{
    const{id}=req.params;
    esquema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})


module.exports=routev