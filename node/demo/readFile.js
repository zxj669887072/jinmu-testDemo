const fs = require('fs');
const readline = require('readline');

const readS = fs.createReadStream(__dirname+'/第三周彩蛋数据(1).txt');

const rl = readline.createInterface({
  input: readS
});

let popList = [],stack = [],index = 0;
rl.on("line", (data) => {
  index++;
  // if(index < 10) console.log(index,data);
  let strList = data.split(' ');
  if(strList[0] === 'push'){
    // if(index < 20) console.log(index,'push:',strList[1]);
    stack.push(Number(strList[1]));
  }else if(strList[0] === 'pop'){    
    popList.push(stack.pop());
    // if(index < 20) console.log(index,'pop:',popList);
  };  
});

rl.on("close", () => {
  let retNum = popList.reduce((a,b,c) => a+b*(c+1),0); //11186206671
  console.log("readLine closed ....",`index:${index}`,popList.length,retNum);
  console.log(`stack`,stack,'\npop',popList);
});