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



email:
{

    type:String,
    required:true
},
location: {
    long: {
        type: Number,
        default : 28.4595},

    lat: {
        type: Number,
        default : 77.0266}
}



});


const User=module.exports=mongoose.model('User',UserSchema);