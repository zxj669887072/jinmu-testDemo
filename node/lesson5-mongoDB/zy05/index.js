class Connection{
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

module.exports = Connection;