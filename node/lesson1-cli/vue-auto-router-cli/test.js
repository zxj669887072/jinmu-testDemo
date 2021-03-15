const open = require('open');
console.log(open);
// open('http://localhost:8080')
// open('https://sindresorhus.com', {app: {name: 'firefox'}});
open('https://sindresorhus.com', {app: {
  // name: 'chrome'
  name: open.apps.chrome
}}).catch(err => {
  console.log(err);
});;