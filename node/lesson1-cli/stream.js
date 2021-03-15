const fs = require('fs');
// const rs = fs.createReadStream('./01.jpg');
// const ws = fs.createWriteStream('./02.jpg');

// rs.pipe(ws);


// const rs = fs.createReadStream(__dirname+'/userData.json');
const rs = fs.createReadStream(__dirname+'/userData.json');
// console.log('rs',rs);

/* // 'rs' may be triggered multiple times as data is buffered in
rs.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)',chunk);
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = rs.read())) {
    console.log(`读取 ${chunk.length} 字节的数据`);
  }
  console.log('====================================');
  console.log('chunk',chunk);
  console.log('====================================');
});

// 'end' will be triggered once when there is no more data available
rs.on('end', () => {
  console.log('Reached end of stream.');
}); */

const chunks = [];let result = null;
console.log('start');

rs.on('data', (chunk) => {
  console.log(`接收到 ${chunk.length} 个字节的数据`);
  chunks.push(chunk);
});

/* rs.on('readable', () => {
  console.log('====================================');
  console.log('readable');
  console.log('====================================');
  let chunk;
  while (null !== (chunk = rs.read())) {
    // console.log('chunk',chunk);
    // console.log(chunk.toString());
    chunks.push(chunk);
  }
}); */

rs.on('end', () => {
  const content = chunks.join('');
  // console.log('content',content,content.length,content.trim(),typeof content);
  // console.log(content);
  try {
    // result = JSON.parse(content);
    result = JSON.parse(content.trim());
  } catch (error) {
    console.log('JSON解析失败',error);
  }
});

console.log('end');

// console.log(JSON.parse(`{
//   "name": "zxc",
//   "user": "tom"
// }`));
