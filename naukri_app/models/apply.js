const mongoose=require('mongoose');
const ApplySchema=mongoose.Schema({



 apply_for :
{

    type:String,
    require:true
},

apply_date:
{

    type:String,
    require:true


}




});


const Apply=module.exports=mongoose.model('Apply',ApplySchema);