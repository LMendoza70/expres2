const express= require('express')
const esquema= require('../models/producto')

const routepr= express.Router()

//crear un producto
routepr.post('/producto',(req,res)=>{
    const producto= esquema(req.body)
    producto.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})
/*
//obtener usuarios
router.get('/users',(req,res)=>{
    esquema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//busca user
router.get('/users/:id',(req,res)=>{
    const{id}=req.params;
    esquema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//actualizar usuario
router.put('/users/:id',(req,res)=>{
    const{id}=req.params;
    const{nombre,appaterno,apmaterno,email,password}=req.body

    esquema
    .updateOne({_id:id},{$set:{nombre,apmaterno,apmaterno,email,password}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar usuario
router.delete('/users/:id',(req,res)=>{
    const{id}=req.params;
    esquema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})
*/

module.exports=routepr