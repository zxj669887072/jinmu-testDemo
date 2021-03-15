const buf1 = Buffer.alloc(10);
console.log('buf1',buf1);


const buf2 = Buffer.from('z x c');
console.log('buf2',buf2);

const buf3 = Buffer.from('啊中');
console.log('buf3',buf3);


const buf4 = Buffer.concat([buf2,buf3]);
console.log('buf4',buf4);