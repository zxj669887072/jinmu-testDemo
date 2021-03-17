const {promisify} = require('util');
const fs = require('fs');
// module.exports.parser = async function(path){
//   let result = {};
//   const readFile = promisify(fs.readFile);
//   let data = await readFile(path);
//   data = data.toString();
//   console.log(data);
//   try {
//     result = JSON.parse(data);
//   } catch (error) {
//     console.log('解析失败',error);
//   }
//   return result;
// }


module.exports.parser = async function(path){
  let rs = fs.createReadStream(path),chunks = [],result = {};
  result = await new Promise((resolve,reject) => {
    rs.on('data',(chunk) => {
      console.log(`接收到 ${chunk.length} 个字节的数据`);
      chunks.push(chunk);
    });
    rs.on('end',() => {
      console.log('已没有数据');

      // let ret = Buffer.concat(chunks);

      let ret = chunks.join('');
      console.log(ret);
      try {
        ret = JSON.parse(ret);
      } catch (error) {
        
      };
      resolve(ret)
    });
  });    
  
  return result;
}

