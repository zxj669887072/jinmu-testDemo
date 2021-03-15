const fs = require('fs');

// const aFile = fs.readFileSync('./a.js');
// const aStr = aFile.toString();
// console.log('a.js',aFile,aStr);

// fs.readFile('./a.js',(err,data) =>{

//   if(err) throw new Error(err);

//   console.log('readFile--',data);
// });


// console.log('====================================');
// console.log('read');
// console.log('====================================');



(async ()=>{
  const { promisify } = require('util');
  const readFile = promisify(fs.readFile);
  const data = await readFile('./a.js');

  console.log('data',data);
})();