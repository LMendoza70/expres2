const mongoose=require('mongoose')

const moliendaSquema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Molienda',moliendaSquema)