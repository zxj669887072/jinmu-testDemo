#!/usr/bin/env node

// console.log('cli zxc666');

const program = require('commander');
program.version(require('../package.json').version);

program.command('init <name>').
  description('init project').
  // .action(name =>{
  //   console.log('init:',name);
  // })
  action(require('../lib/init'));
program.parse(process.argv);

// console.log('argv',process.argv);