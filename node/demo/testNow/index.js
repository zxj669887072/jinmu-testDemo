const path = require('path');
const fs = require('fs');

module.exports = class TestNow{
  
  /* 
    *生成测试文件名
    *@param {*} fileName 代码文件名
    * 
  */

  getTestFileName(fileName){
    const dirName = path.dirname(fileName);
    const fileBaseName = path.basename(fileName);
    const extName = path.extname(fileBaseName); 
    const testName = fileBaseName.replace(extName,`.spec${extName}`);
    console.log(dirName,fileBaseName,extName,testName);
    return path.format({
      root: dirName+'/__test__/',
      // dir: dirName+'/__test__',
      base: testName
    })
  }


}