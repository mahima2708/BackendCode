
exports.pageError=(req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
    }