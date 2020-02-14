const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') //导入在内存中国呢自动生成index页面插件

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html'//生成的内存中首页的名称
})
//向外暴露一个打包的配置对象
module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },

            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        
                    }],   //打包处理css样式表的第三方loader
            },
            {
                test:/\.ttf|woff|woff2|eot|svg$/,
                use:'url-loader'
            
            },
            {
                //只为sass启用模块化
                test:/\.scss$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader",options:{
                        modules:{
                            localIdentName: "[path][name]-[local]-[hash:5]"
                        }
                    }},
                    {loader:"sass-loader"},
                ]
            }
            
        ]
},
    resolve: {
    extensions: ['.js', '.jsx', '.json'],//可以省略这些后缀
        alias: {
        '@': path.join(__dirname, './src')
    }
}
    
}