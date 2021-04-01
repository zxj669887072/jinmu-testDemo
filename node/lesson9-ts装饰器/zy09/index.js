/* class Connection{
  constructor(){
    this.listeners = [];
  }
  onConn(fn){
    this.listeners.push(fn);
  }

  connection(...arg){
    if(this.listeners.length > 0){
      this.listeners.forEach(fn => fn(...arg));
    }
  }
}
 */
function brackets(target,property){
  const oldProp = target.prototype[property];
  target.prototype[property] = function (str){
    return oldProp(`[${str}]`)
  }
};

function sender(arg){

  return function(target,property){
    const oldProp = target.prototype[property];
    target.prototype[property] = function (str){
      return oldProp(`${arg} : ${str}`)
    }
  }
}

module.exports = { brackets, sender};