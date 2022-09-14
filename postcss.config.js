// 安装post-css自动添加css的兼容性前缀（-ie-,-webkit-）

//     npm install postcss-loader autoprefixer -D

const autoprefixer =require('autoprefixer')
module.exports={
    plugins:[autoprefixer]
}