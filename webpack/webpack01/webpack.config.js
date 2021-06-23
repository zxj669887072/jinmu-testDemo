const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlwebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: "development", // "production" | "development" | "none"
    // entry: "./src/index.js",
    entry: {
        index: "./src/index.js",
        zxc: "./src/zxc.js"
    },
    output: {
        // filename: "main.js",
        filename: "[name]-[chunkhash:8].js",
        path: path.resolve(__dirname, "dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
    },
    devtool: 'source-map',
    resolveLoader: {
        modules: ["node_modules","./my-loaders"],
    },
    devServer: {
        proxy: {},
        host: '0.0.0.0',
        port: '8081',
        open: true,

    },
    module: {
        rules:[{
            test:/\.css$/,
            // use:"css-loader"
            use:[
                // "style-loader",
                miniCssExtractPlugin.loader,                
                "css-loader",
                "postcss-loader",
            ]
        },{
            test:/\.less$/,
            use:[
                // "style-loader",
                miniCssExtractPlugin.loader,  
                "css-loader",
                // "zxc-style-loader","css-loader",
                "postcss-loader",
            /* {
                loader:'postcss-loader',
                // webpack--loader配置项
                options:{
                    // postcss的选项
                    postcssOptions:{
                        plugins:['autoprefixer']
                    }
                }
            }, */
            {
                // loader:"less-loader",
                loader:"zxc-less-loader",
                options:{
                    sourceMap: true
                }
            }]
        },{
            test:/\.svg$/,
            // use:'svg-loader',            //字符串写法
            // use:['svg-loader'],          //多个loader,使用数组方式
            use:{                           //需要配置loader参数时，使用对象方式
                loader:'svg-loader',
                options:{

                }
            }
        },{
            test:/\.js$/,
            use: [{
                loader: path.resolve(__dirname,'./my-loaders/loaderDemo.js?jinmu'),
                options:{
                    name: 'zxc'
                }
            },
                // path.resolve(__dirname,'./my-loaders/loader_1.js?name=asd')
                "loader_1?123456"
            ]
        },{
            test:/\.(jpe?g|png|gif|webp)$/,
            // test:/\.jpg$/,
            use:[{
                // loader: "file-loader",
                loader: "url-loader",
                options:{
                    name: '[name].[ext]',
                    // 图片存放位置
                    outputPath:'images',
                    publicPath: "../images/",
                    
                    // url-loader的临界值
                    limit: 3*1024
                }
            }]
        },
        {
            test:/\.woff2$/,
            use: {
                loader: "file-loader",
                options:{
                    name: '[name].[ext]',
                    outputPath: 'fonts',
                    publicPath: '../fonts/'
                }
            }
        }
    ]
    },

    plugins:[
        new htmlwebpackplugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks:['index']
        }),

        new htmlwebpackplugin({
            title: 'zxc--',
            template: "./src/zxc.html",
            filename: "zxc.html",
            chunks:['zxc']
        }),

        // css抽离单独文件
        new miniCssExtractPlugin({
            filename: "css/[name]-[contenthash:8].css"
        }),
        new CleanWebpackPlugin(),
    ],

}