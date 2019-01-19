var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.send("手机")
});
router.get('/pc',function(req,res,next){
    res.send("pc机")
})

router.get('/phoneUser',function(req,res,next){
    res.render('phone',{
        name:"张三",
        age:18
    })
})
module.exports = router;