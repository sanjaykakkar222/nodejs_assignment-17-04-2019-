const mongoose=require('mongoose');
const ApplySchema=mongoose.Schema({



name_of_applicant:
{


    type:String,
    required:true
},


job_id:
{

    type:String,
    required:true
},
user_id:
{


    type:String,
    required:true
},

 apply_post:
{

    type:String,
    require:true
},

apply_date:
{

    type:String,
    required:true


}




});


const Apply=module.exports=mongoose.model('Apply',ApplySchema);