
module.exports = function(context){
    // console.log(context);
    return `
        const style = document.createElement('style');
        style.innerHTML = ${context};
        document.head.appendChild(style);
    `
}