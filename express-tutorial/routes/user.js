var express = require('express');
var router = express();

router.get('/:id',function(req,res){
    res.send("get 리퀘스트 리시브, 파라메타:"+req.params.id);
});

router.post('/',function(req,res){
    console.log(JSON.stringify(req.body,null,2));

    res.json({ 
        success:true,
        user:req.body.username})
});

router.put('/',function(req,res){
    res.status(400).json({message:"잘못된 요청!"});
});

router.delete('/',function(req,res){
    res.send("delete 리퀘스트 리시브")
});

module.exports=  router;
