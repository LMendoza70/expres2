const mongoose=require('mongoose')

const productoSquema=mongoose.Schema({
    precio:{
        type:Number,
        required:true
    },
    presentacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Presentacions', // nombre de la colección de presentaciones
        required: true,
    },
    variedad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'varietals', // nombre de la colección de variedades
        required: true,
    }

})

module.exports=mongoose.model('Producto',productoSquema) 