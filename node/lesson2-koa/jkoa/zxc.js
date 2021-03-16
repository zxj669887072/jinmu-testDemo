const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');

class Zxc{
  constructor(){
    this.middlewares = []
  }
  listen(...args){
    const server = http.createServer(async (req,res) =>{
      // this.callback(req,res)
      const ctx = this.createContext(req,res);
      // this.callback(ctx);

      const aaa = this.compose(this.middlewares);
      await aaa(ctx);

      res.end(ctx.body);
    });
    server.listen(...args);
  }

  // use(callback){
  //   this.callback = callback;
  // }
  
  use(middleware){
    this.middlewares.push(middleware);
  }

  
  /*构建上下文
   *@functionName:   js
   *@params1: req
   *@params2: res
   *@description:
   *@author: 金木
   *@date: 2021-03-16 21:47:15
   *@version: V1.0
  */
  createContext(req,res){
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);
    
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    
    return ctx;
  }

  compose(middlewares){
    return function(ctx) {
      return dispatch(0);
  
      function dispatch(i){
        console.log('dispatch',i);
        let fn = middlewares[i];
        if(!fn){
          return Promise.resolve()
        }
  
        return Promise.resolve(
          fn(ctx,function next(){
            return dispatch(i+1)
          })
        )
      }
    }
  }
}


module.exports = Zxc;