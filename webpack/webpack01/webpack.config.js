const path = require('path');

const htmlwebpackplugin = require('html-webpack-plugin');
module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: "./src/index.js",
    // entry: {
    //     main: "./src/index.js",
    //     zxc: "./src/zxc.js"
    // },
    output: {
        // filename: "main.js",
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
    },
    module: {
        rules:[{
            test:/\.css$/,
            // use:"css-loader"
            use:["style-loader","css-loader"]
        }]
    },

    plugins:[new htmlwebpackplugin({
        template: "./src/index.html",
        filename: "index.html"
    })],

}