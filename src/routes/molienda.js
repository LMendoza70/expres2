const express=require('express')
const esquema=require('../models/molienda')

const routerm=express.Router()

//crear molienda
routerm.post('/moliendas',(req,res)=>{
    const molienda= esquema(req.body)
    molienda.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//obtener moliendas
routerm.get('/moliendas',(req,res)=>{
    esquema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})
/*
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

module.exports=router 