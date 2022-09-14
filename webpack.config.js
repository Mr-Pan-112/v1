
// module.exports={
//     //development（开发者环境）和production(生产环境变量)，用来指定构建模式
//     mode:'development'
// }
//项目的配置文件
const path = require('path')

const HtmlWebpackPlugin=require('html-webpack-plugin')
const { options } = require('less')
const htmlPlugin=new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html'
})
const VueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',//development production
    //入口文件entry
    entry: path.join(__dirname,'./src/index.js'),
    //出口文件output
    output: {
        //输出文件的名称
        filename: "bundle.js",
        //输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // publicPath:'./',//绝对路径
        
    },
    //plugins数组是webpack打包期间会用到的一些插件列表
    plugins:[htmlPlugin,new VueLoaderPlugin()],//,new VueLoaderPlugin()构造函数

    module: {
        // 配置规则
        rules: [
            //使用正则表达式配置rule规则，.css处理样式文件
            {test:/\.css$/, use:['style-loader','css-loader','postcss-loader']},
            //处理.less文件，使用less-loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //处理.scss文件，使用sass-loader// npm install --save node-sass 报错安装
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},

            //处理图片文件和字体|。----由于版本问题，webpack 5安装使用了 url-loader，需要在 test 下增加一行 type: ‘javascript/auto’
            //url-loader?limit=31765：limit指定图片大小，小于limit大小的图片会转化成base64格式，加载更快 
            // --use接收两种，一种是loader数组，一种是loader名称
            {
                test:/\.png|jpg|gif|bmp|ttf|eot|svg|woff|woff2$/,
                type: 'javascript/auto', // webpack 5 需要
                use:[{
                    loader:'url-loader?limit=31760',
                    options:{
                // 在url-loader内部封装了file-loader ，而file-loader在新版本中esModule属性默认为true 即默认使用ES模块语法
                // 导致了造成了引用图片文件的方式和以前的版本不一样了。所以需要关闭ES模块语法。
                        esModule:false,
                    }
                    }
                ],
            },
            //处理js文件，----exclude为排除项，表示babel-loader不需要处理node_modules中的js文件
            // npm install @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},

            //处理vue单文件
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    //也可以在package.json文件中编辑script下的dev:--open --host 127.0.0.1 --port 8888
    devServer: {
        open: true,//初次打包完成后,自动打开浏览器
        host: 'localhost',// 实时打包所使用的主机地址
        port: 8080,// 实时打包所使用的端口号
        static:'./' //静态资源，能够在http协议上打开相当于是app.use(express.static('./'))
        },
    // // resolve.alias 配置项通过别名来将路径映射为一个新的导入路径
    // resolve: {
    //     alias: {
    //     }
    // }
}
