const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin');


const htmlWebpackPlugin = require('html-webpack-plugin')
//当以命令行形式运行Webpack 或 webpack-dev-server的时候，工具会发现，我们并没有提供要打包的文件的入口和出口文件，此时，他会检查项目
//根目录中的配置文件，并读取这个文件，就拿到了到处的这个配置对象，然后根据这个对象，进行打包构建。
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{// 配置所有第三方loader模块的
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=70000&name=[hash:8]-[name].[ext]' }, //处理图片路径的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader'},
            {  test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, use: 'file-loader' }
        ]
    },
    resolve: {
        alias: {
            //'vue$': 'vue/dist/vue.js'
        }
    }
}