
module.exports.compose =  function (middwares){
  return function (){
    return dispatch(0);
    
    function dispatch(i){
      console.log(i);
      let fn = middwares[i];
      if(!fn){
        return Promise.resolve()
      }

      return Promise.resolve(
        fn(function next(){
          console.log('next');
          return dispatch(i+1);
        })
      )
      
    }
  }
}