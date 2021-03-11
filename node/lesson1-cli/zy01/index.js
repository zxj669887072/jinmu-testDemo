const fs = require('fs');
const {resolve} = require('path');
// console.log('path:',resolve('./'),fs.readdirSync);
function getRouter(path = resolve('./')){
  // console.log(path);
  let fileList = fs.readdirSync('./__tests__/data');
  /* console.log('====================================');
  console.log(fileList);
  console.log('===================================='); */
  return `
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
${fileList.map(name => 
`{
  path: '/${name.replace('.vue','')}',
  name: '${name.replace('.vue','')}',
  component: () => import('./views/${name}')
},
`
).join('')}]
})`;

}
module.exports = {getRouter}