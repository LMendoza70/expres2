const mongoose=require('mongoose')

const varSchema = mongoose.Schema(
  {
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    variedad:{
        type:String,
        required:true
    },
    puntiacion:{
        type:String,
        required:true
    },
    productor:{
        type:String,
        required:true
    },
    finca:{
        type:String,
        required:true
    },
    altura:{
        type:String,
        required:true
    },
    proceso:{
        type:String,
        required:true
    },
    notas:{
        type:String,
        required:true
    }
  }
);

module.exports=mongoose.model('Varietal',varSchema)
