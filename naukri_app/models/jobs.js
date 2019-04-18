const mongoose=require('mongoose');
const JobsSchema=mongoose.Schema({

job_location:
{

    type:String,
    require:true
},

job_type:{

    type:String,
    required:true
},




});


const Jobs=module.exports=mongoose.model('Jobs',JobsSchema);