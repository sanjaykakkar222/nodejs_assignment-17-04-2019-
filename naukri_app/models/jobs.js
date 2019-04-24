const mongoose=require('mongoose');
const JobsSchema=mongoose.Schema({



    
name:
    {

        type:String,
        required:true
    },


job_type:{

    type:String,
    required:true
},

position:
{


    type:String,
    required:true
},



salary:
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


const Jobs=module.exports=mongoose.model('Jobs',JobsSchema);