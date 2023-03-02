const mongoose=require('mongoose')

const productoSquema=mongoose.Schema({
    precio:{
        type:Number,
        required:true
    },
    presentacion: {
        type:String,
        required: true,
    },
    variedad: {
        type: String,
        required: true,
    }

})

module.exports=mongoose.model('Producto',productoSquema) 