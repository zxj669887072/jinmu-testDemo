const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response) =>{
  // request: 接受，response：发送
  // console.log('request',getPrototypeChain(request));
  // response.end('zxc');

  const {url,method,headers} = request;
  console.log(url,method);
  if(url === "/" && method === "GET"){
    fs.readFile('index.html',(err,data) =>{
      if(err){
        response.writeHead(500,{
          'Content-Type': 'text/plain;charset=utf-8'
        });
        response.end('500 错错错');
        return;
      };
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    })
  }else if(url==="/users"){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({name:'zxc'}));

  }else if(method==="GET" && headers.accept.indexOf('image/*') !== -1 && url !== '/favicon.ico'){
    console.log('image','.'+url);
    fs.createReadStream('.'+url).pipe(response)
    // response.end('')
  }else{
    response.statusCode = 404;
    response.setHeader('Content-Type','text/plain;charset=utf-8');
    response.end('页面在路上。。。');
  }
  
    

});

server.listen(3001,() =>{
  console.log('http -server:localhost:3001');
});


// 打印原型链
function getPrototypeChain(obj) {
  var protoChain = [];
  while (obj = Object.getPrototypeOf(obj)) {
    //返回给定对象的原型。如果没有继承属性，则返回 null 。
    protoChain.push(obj);
  }
  protoChain.push(null);
  return protoChain;
}
