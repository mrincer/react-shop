const loader = require('html-loader');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry:'./src/index.js',
    mode: 'development',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve:{
        extensions:['.js', '.jxs']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test:/\.s[ac]ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
            new HtmlWebpackPlugin(
                {
                    template: './public/index.html',
                    filename: './index.html'
                }),
            new MiniCssExtractPlugin({
                    filename: '[name].css'
                })
       
    ],
    devServer:{
        historyApiFallback:true,
        allowedHosts: path.join(__dirname, 'dist'),
        port: 3005,
        compress:true
    }
}