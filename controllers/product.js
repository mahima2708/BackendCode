const path= require('path');
exports.getAddProduct= (req, res, next) => {
    res.sendFile(path.join(__dirname,"../","/View","/product.html"));
      
}

exports.postAddProduct= (req,res,next)=>{
       res.sendFile(path.join(__dirname,"../","/View","/contactUs.html"));
   }

   exports.successful=(req,res,next)=>{
    res.send("<h1>Form Submitted Successfully</h1>");
}
