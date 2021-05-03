// loader 本质是一个函数
// https://webpack.docschina.org/api/loaders/

module.exports = function(source,sourceMap,meta){
    // console.log('my-loader',source,this);
    const {loaders,mode,query,request} = this;
    // console.log('loaderDemo.js',loaders,mode,query,request);   

    /* this.query;
        *如果这个 loader 配置了 options 对象的话，this 就指向这个对象。
        *如果 loader 中没有 options，而是以 query 字符串作为参数调用时，this.query 就是一个以 ? 开头的字符串。
    */

    source = source.replace('asd','asd ===> zxczxc');
    // console.log(source);

    // 同步直接返回
    // return source;

    // this.callback(null,source);

    var callback = this.async();
    // callback(null,source);

    setTimeout(() =>{
        callback(null,source);
    },1000)
};