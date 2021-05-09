
const less = require('less');

module.exports = function(context){
    less.render(context,(err,output) =>{
        // console.log(output);
        this.callback(err,output.css);
    });
}