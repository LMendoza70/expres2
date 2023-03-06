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

//obtener producto
routepr.get('/producto', (req, res) => {
    esquema.aggregate([
      {
        $lookup: {
        from: 'varietals',
        nombre: 'nombre',
        descripcion:'descripcion' ,
        variedad:'variedad',
        puntiacion:'puntuacion',
        productor:'productor',
        finca:'finca',
        altura:'altura',
        proceso:'proceso',
        notas:'notas',
        _idv: '_id',
        as: 'variedad'
        }
      },
      {
        $lookup: {
          from: 'presentacions',
          descp: 'descripcion',
          _idd: '_id',
          as: 'presentacion'
        }
      }
    ])
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
  });
  
/*routepr.get('/producto',(req,res)=>{
    esquema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})*/

//busca producto
routepr.get('/producto/:id', (req, res) => {
    const idProducto = req.params.id;
  
    esquema.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(idProducto) } },
      { 
        $lookup: {
            from: 'varietals',
            nombre: 'nombre',
            descripcion:'descripcion' ,
            variedad:'variedad',
            puntiacion:'puntuacion',
            productor:'productor',
            finca:'finca',
            altura:'altura',
            proceso:'proceso',
            notas:'notas',
            _idv: '_id',
            as: 'variedad'
        }
      },
      {
        $lookup: {
            from: 'presentacions',
            descp: 'descripcion',
            _idd: '_id',
            as: 'presentacion'
        }
      }
    ])
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
  }); 
/*routepr.get('/producto/:id',(req,res)=>{
    const{id}=req.params;
    esquema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})*/

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