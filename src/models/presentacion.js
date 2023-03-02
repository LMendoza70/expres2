const mongoose=require('mongoose')

const presentacionSquema=mongoose.Schema({
    descripcion:{
        type:String,
        required:true
    },
    gramos:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model('Presentacion',presentacionSquema) 