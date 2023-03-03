const mongoose=require('mongoose')

const productoSquema=mongoose.Schema({
    precio:{
        type:Number,
        required:true
    },
    presentacion: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"presentacions",
        required: true,
    },
    variedad: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"varietals",
        required: true,
    }
})

module.exports=mongoose.model('Producto',productoSquema) 