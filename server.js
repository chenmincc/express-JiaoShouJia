const express = require('express');
const app = express();
const url = require('url')

// app.get('/',function(req,res,next){
//     console.log(1);
//     next()
// },function(req,res,next){
//     console.log(2);
//     res.send("你好");
//     next();
// },function(req,res){
//     console.log(3);
//     console.log(req.query)
// });


// app.get('/ab',function(req,res){
//     console.log(1);
//     res.send("hello")
// });
// app.get('/ab',function(req,res){
//     console.log(2);
//     res.send("world")
// })

app.use(function(req,res,next){
    console.log("请求地址是",url.parse(req.url).pathname.substr(1));
    next()
});
app.get('/a/hello',function(req,res){
    res.send('hello11');
});
app.get('/b/world',function(req,res){
    res.send('world22');
})

// app.use('/a', function(req, res, next) {
//     console.log('请求的地址是', req.url);
//     next();
//   })
  
//   app.get('/a/hello', function(req, res) {
//     res.send('hello');
//   })
  
  
//   app.get('/b/world', function(req, res) {
//     res.send('world');
//   })

app.listen(3000)