const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({



    

    user_type:
    {

        type:Number,
        required:true

    },

    
   

first_name:
{

    type:String,
    required:true
},

last_name:{

    type:String,
    required:true
},

phone:{

    type:Number,
    required:true
},

location:{

    type:String,
    required:true
}



});


const User=module.exports=mongoose.model('User',UserSchema);