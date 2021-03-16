const Koa = require('koa');
const app = new Koa();

// ctx.url ==> ctx.request.url
app.use(async (ctx,next) =>{
  console.log('================================',next);
  // console.log(`ctx:`,ctx,'next:',next);
  const {method,url,header} = ctx.request;
  const {status,message} = ctx.response;
  console.log(method,url,header,status,message);

  const start = Date.now();
  await next();
  const end = Date.now();
  console.log(`请求${ctx.url} 耗时 ${end-start}ms`);

});

app.use((ctx,next) =>{
  console.log('1');
  next();
  console.log('12');
})

app.use((ctx,next) =>{
  console.log(20);
  const expire = Date.now() + 100;
  while(Date.now() < expire);

  ctx.body = {
    name:'zxc'
  };
  console.log('set body');
})

// 执行next() 下一个app.use()才会执行
app.use((ctx,next) =>{
  console.log('31');
})


app.listen(3001);

