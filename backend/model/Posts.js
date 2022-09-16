const mongoose = require('mongoose');

const data =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        // required:true,
    },
    category:{
        type:String,
        required:true,
    },
    des:{
        type:String,
        required:true,
    }, 

    date:{
        type:String,
        default : new Date().toLocaleString()
    }
})




module.exports = mongoose.model('data',data)





