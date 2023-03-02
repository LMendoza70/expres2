const express=require('express')
const esquema=require('../models/presentacion')

const routerp=express.Router()

//crear presentacion
routerp.post('/presentacion',(req,res)=>{
    const presenta= esquema(req.body)
    presenta.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//obtener presentacion
routerp.get('/presentacion',(req,res)=>{
    esquema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//busca presentacion
routerp.get('/presentacion/:id',(req,res)=>{
    const{id}=req.params;
    esquema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//actualizar presentacion
routerp.put('/presentacion/:id',(req,res)=>{
    const{id}=req.params;
    const{nombre,gramos}=req.body

    esquema
    .updateOne({_id:id},{$set:{nombre,gramos}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar presentacion
routerp.delete('/presentacion/:id',(req,res)=>{
    const{id}=req.params;
    esquema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

module.exports=routerp 