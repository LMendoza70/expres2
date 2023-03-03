const express= require('express')
const { default: mongoose } = require('mongoose')
const esquema= require('../models/producto')
const objetid=require('mongoose').Types.ObjectId

const routepr= express.Router()

//crear un producto
routepr.post('/producto',(req,res)=>{
    const producto= esquema(req.body)
    producto.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//obtener producto
routepr.get('/producto',(req,res)=>{
    esquema
    .find()
    .populate('presentacion')
    .populate('variedad')
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//busca producto
routepr.get('/producto/:id',(req,res)=>{
    const{id}=req.params;
    esquema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//actualizar producto
routepr.put('/producto/:id',(req,res)=>{
    const{id}=req.params;
    const{precio,presentacion,variedad}=req.body

    esquema
    .updateOne({_id:id},{$set:{precio,presentacion,variedad}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar usuario
routepr.delete('/producto/:id',(req,res)=>{
    const{id}=req.params;
    esquema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

module.exports=routepr