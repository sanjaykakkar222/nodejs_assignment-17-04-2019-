const express=require('express');
const router=express.Router();

const User=require("../models/contacts");
const Jobs=require("../models/jobs");

const Apply=require('../models/apply');

//const En=require('../rolesenum/')
const roles=require('../rolesenum/roles')


//retriving contacts
router.get('/users',(req,res,next)=>{

    //res.send("retriving the contact list");
    User.find(function(err,user){

    res.json(user);
    })
});

router.get('/jobs',(req,res,next)=>{

    //res.send("retriving the contact list");
    Jobs.find(function(err,job){

    res.json(job);
    })
});

router.get('/applys',(req,res,next)=>{

    //res.send("retriving the contact list");
    Apply.find(function(err,apply){

    res.json(apply);
    })
});




//add contacts


router.post('/user',(req,res,next)=>{

//logic to add contact
  //let a=req.body.user_type;
  //let val=roles.a


let newUser=new User({

    

    user_type:req.body.user_type,
 
first_name:req.body.first_name,
last_name:req.body.last_name,
phone:req.body.phone,
location:req.body.location


});

newUser.save((err,user)=>
{


    if(err)
    {
        res.json({msg:'Failed to add contacts'});
    }

    else{

        res.json({msg:'Contact added successfully'})
    }
});
});


router.post('/job',(req,res,next)=>{

    //logic to add contact
    
    let newJob=new Jobs({
    job_location:req.body.job_location,
    job_type:req.body.job_type,
   
    
    });
    
    newJob.save((err,user)=>
    {
    
    
        if(err)
        {
            res.json({msg:'Failed to add contacts'});
        }
    
        else{
    
            res.json({msg:'Contact added successfully'})
        }
    });
    });



    router.post('/apply',(req,res,next)=>{

        //logic to add contact
        
        let newApply=new Apply({
        apply_for:req.body.apply_for,
        apply_date:req.body.apply_date,
       
        
        });
        
        newApply.save((err,user)=>
        {
        
        
            if(err)
            {
                res.json({msg:'Failed to add contacts'});
            }
        
            else{
        
                res.json({msg:'Contact added successfully'})
            }
        });
        });
    


//delete contacts



router.delete('/contact/:id',(req,res,next)=>{


//logic to delete contacts

Contact.remove({_id:req.params.id},function(err,result)
{


    if(err)
    {

        res.json(err);
    }
    else
    {

  res.json(result)
        
    }
});

});


module.exports=router;// export the router
