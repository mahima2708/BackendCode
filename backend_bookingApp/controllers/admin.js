const path = require('path');

const entry = require('../models/user');
exports.sendHtmlFile = (req,res,next)=>{
    const file_html = path.join(__dirname,"../","./view/bookingApp.html");
    res.sendFile(file_html);
} 


exports.addUser =async (req,res,next)=>{
    console.log("###############3",req.body);
    try{
        
        const nAme = req.body.nameInput;
    const mail = req.body.emailInput;
    const contact_number = req.body.phone_number;
    console.log("+++++++",nAme);
    const newData = await entry.create({name:nAme,email:mail,phone:contact_number});
    res.status(200).json({newEntryInserted: newData})
   
    //res.redirect('/');
    }
    catch(err){
        res.status(200).json({error:err});
    }

    
}

exports.getDatafromSql = (req,res,next)=>{
    entry.findAll().then((response)=>{
        const newdata =[];
        response.forEach((item)=>{
            newdata.push({
                id:item.id1,
                name:item.name,
                email:item.email,
                phone:item.phone
            })
    
        } );
        res.status(201).json({newdataentry:newdata});
    }).catch((err)=>{
        console.log(err);
        res.status(200).json({error:err});
    });
}

exports.deleteData = (req,res,next)=>{
   //console.log("$$"+req.params.id);
   console.log("$%$$%%",req.params.id);
   const id = req.params.id;
    entry.destroy({
        where: {
           "id1":id
        }
    }).then((response)=>{
       res.status(200);
    }).catch((err)=>{
        console.log(err);
        res.status(501)
    })
}