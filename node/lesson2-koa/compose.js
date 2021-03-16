/* const add = (x,y) => x+y;
const square = z => z*z;

// const compose = (fn1,fn2) => (...args) => fn1(fn2(...args));

const compose = (...[first,...other]) => (...args) =>{
  let result = first(...args);
  other.forEach(fn =>{
    result = fn(result);
  });
  return result;
}

// const fn = (x,y) => square(add(x,y));
// const fn = compose(square,add);
const fn = compose(add,square,square);

console.log(fn(1,2)); */

function compose(middlewares){
  return function() {
    return dispatch(0);

    function dispatch(i){
      console.log('dispatch',i);
      let fn = middlewares[i];
      if(!fn){
        return Promise.resolve(111)
      }

      return Promise.resolve(
        fn(function next(){
          return dispatch(i+1)
        })
      )
    }
  }
}

async function fn1(next){
  console.log('fn1',next);
  await next();
  console.log('end fn1');
}

async function fn2(next){
  console.log('fn2');
  await delay();
  await next();
  console.log('end fn2');
}

function fn3(next){
  console.log('fn3',next);
  next().then(res => console.log(res))
}

function delay() {
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve();
    },2000)
  });
}

const middlewares = [fn1,fn2,fn3];
const finalFn = compose(middlewares);
finalFn();