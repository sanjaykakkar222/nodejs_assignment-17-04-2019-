const express=require('express');
const router=express.Router();

const User=require("../models/contacts");
const Jobs=require("../models/jobs");

const Apply=require('../models/apply');

//const En=require('../rolesenum/')
//const roles=require('../rolesenum/roles');

//  const category=require('../category/category');


const category=require('../category/category')


//retriving contacts
router.get('/users',(req,res,next)=>{

    //res.send("retriving the contact list");
    //var  user_type=req.body.user_type;

    // res.send(user_type)
    
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

let ov=req.body.user_type;
let bv=category[ov];


let newUser=new User({

   
 user_type:bv,
first_name:req.body.first_name,
last_name:req.body.last_name,
phone:req.body.phone,
location:req.body.location,
email:req.body.email,

// long : req.body.location.long,
// lat : req.body.location.lat





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


router.post('/job/:id',(req,res,next)=>{

    //logic to add contact
    User.find({ _id: req.params.id})
    .then((ele)=>{
    //console.log(ele);
        if(ele[0].user_type!==1){
            let newJob=new Jobs({
    
    
        
                name:req.body.name,
                 // job_location:req.body.job_location,
                 job_type:req.body.job_type,
                 position:req.body.position,
                 salary:req.body.salary
                
                 
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
        }else{
            res.send("User not authorised")
        }
    });


 
    });


router.post('/user/job',(req,res,next)=>{

    res.send("you do not have  permission ")

    //logic to add contact
    
//     let newJob=new Jobs({


    
//    name:req.body.name,
//     // job_location:req.body.job_location,
//     job_type:req.body.job_type,
//     position:req.body.position,
//     salary:req.body.salary
   
    
//     });
    
//     newJob.save((err,user)=>
//     {
    
    
//         if(err)
//         {
//             res.json({msg:'Failed to add contacts'});
//         }
    
//         else{
    
//             res.json({msg:'Contact added successfully'})
//         }
//     });
    });



    router.post('/apply',(req,res,next)=>{

        //logic to add contact
        
        let newApply=new Apply({
        name_of_applicant:req.body.name_of_applicant,
        job_id:req.body.job_id,
        user_id:req.body.user_id,
        apply_post:req.body.apply_post,
        apply_date:req.body.apply_date
       
        
        });
        
        newApply.save((err,user)=>
        {
        
        
            if(err)
            {
               res.json({msg:'Failed to add contacts'});
               //res.send(err);
            }
        
            else{
        
                res.json({msg:'Contact added successfully'})
            }
        });
        });





        //updating
        router.put('/user/:id',(req,res,next)=>
{


   User.findOneAndUpdate({_id:req.params.id},{
        $set:
        {

            // itemName:req.body.itemName,
            // itemQuantity:req.body.itemQuantity,

            // itemBought:req.body.itemBought

            first_name:req.body.first_name,
            last_name:req.body.last_name,
            phone:req.body.phone,
            location:req.body.location

        }





    },function(err,result)
    {


        if(err)
        {


            res.json(err);
        }
        else{


            res.json(result)
        }
    })






});


router.put('/job/:id',(req,res,next)=>
{


    User.findOneAndUpdate({_id:req.params.id},{
        $set:
        {

            // itemName:req.body.itemName,
            // itemQuantity:req.body.itemQuantity,

            // itemBought:req.body.itemBought

            job_location:req.body.job_location,
            job_type:req.body.job_type,
           
        }





    },function(err,result)
    {


        if(err)
        {


            res.json(err);
        }
        else{


            res.json(result)
        }
    })






});


router.put('/apply/:id',(req,res,next)=>
{


    User.findOneAndUpdate({_id:req.params.id},{
        $set:
        {

            // itemName:req.body.itemName,
            // itemQuantity:req.body.itemQuantity,

            // itemBought:req.body.itemBought

            apply_for:req.body.apply_for,
        apply_date:req.body.apply_date,
        }





    },function(err,result)
    {


        if(err)
        {


            res.json(err);
        }
        else{


            res.json(result)
        }
    })






});


    








//delete contacts



router.delete('/user/:id',(req,res,next)=>{


//logic to delete contacts

User.remove({_id:req.params.id},function(err,result)
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



router.delete('/job/:id',(req,res,next)=>{


    //logic to delete contacts
    
    User.remove({_id:req.params.id},function(err,result)
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


router.delete('/apply/:id',(req,res,next)=>{


    //logic to delete contacts
    
    User.remove({_id:req.params.id},function(err,result)
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
