const {promisify} = require('util');
const fs = require('fs');
module.exports.parser = async function(path){
  let result = {};
  const readFile = promisify(fs.readFile);
  let data = await readFile(path);
  data = data.toString();
  console.log(data);
  try {
    result = JSON.parse(data);
  } catch (error) {
    console.log('解析失败',error);
  }
  return result;
}

// const fs = promisify(require('fs'));

// module.exports.parser = async function(url){
//   const rs = fs.

//   return ''

// }

// const fs = require('fs');
/* module.exports.parser = async function(path){
  let rs = fs.createReadStream(path);
  rs = promisify(rs.on);
  await rs('data',(chunk) => {
    console.log(`接收到 ${chunk.length} 个字节的数据`);
  });
  await rs('end',() => {
    console.log('已没有数据');
  });
  // await rs.on('data', (chunk) => {
  //   console.log(`接收到 ${chunk.length} 个字节的数据`);
  // });
  // await rs.on('end', () => {
  //   console.log('已没有数据');
  //   return 'zxc'
  // });
  
  return 'aaa';
} */

