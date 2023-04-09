const path = require('path');
const tAble= require('../models/userTable');
exports.fileSend =(req,res,next)=>{
    const filePath = path.join(__dirname,'../view/expanseTrackerApp.html');
    res.sendFile(filePath);
};
exports.addUser=async(req,res,next)=>{
try{
    console.log(req.body);
    const month = req.body.month;
    const payment= req.body.payment;
    const  category= req.body.category;
    const product= req.body.product;
    const amount= req.body.amount;
    const data= await tAble.create({
        monthval:month,
        payment:payment,
        category:category,
        product:product,
        amount:amount,
    })
    res.status(200).json({newEntryInserted: data});
}
catch(err){ console.log(err)};

}
exports.delUser= (req,res,next)=>{
    const id = req.params.id;
    tAble.destroy({
        where: {
           "id":id
        }
    }).then((response)=>{
       res.status(200);
    }).catch((err)=>{
        console.log(err);
        res.status(501)
    })
}
exports.getdAta= (req,res,next)=>{
    console.log("***")
    tAble.findAll().then((response)=>{
    const sqldata=[];
    response.forEach((item)=>{
        sqldata.push({
            id:item.id,
            monthval:item.monthval,
            payment:item.payment,
            category:item.category,
            product:item.product,
            amount:item.amount
        })
      
    })
    console.log(sqldata);
    res.status(201).json({newdataentry:sqldata});
    }).catch((error)=>{
        res.status(404).json({error:error});
    });
}
