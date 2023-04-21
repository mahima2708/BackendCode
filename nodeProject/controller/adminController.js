const path = require('path');
const tAble= require('../model/adminpage.js');
exports.fileSend =(req,res,next)=>{
    const filePath = path.join(__dirname,'../view/sellersAdmin.html');
    res.sendFile(filePath);
};
exports.addUser=async(req,res,next)=>{
try{
    console.log(req.body);
    const product= req.body.product;
    const amount= req.body.cost;
    const data= await tAble.create({
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
    const sumval =0;
   
    response.forEach((item)=>{
        sqldata.push({
            id:item.id,
            product:item.product,
            amount:item.amount
        })
      
    })
    
    res.status(201).json({newdataentry:sqldata});
    }).catch((error)=>{
        res.status(404).json({error:error});
    });

    
}
exports.getColumnSum= (req,res,next)=>{
    
    tAble.sum('amount').then(result=>{
        res.status(201).json({newdataentry:result});
    })
    .catch((error)=>{
        res.status(404).json({error:error});
    });
}