const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin}=require('clean-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin= require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPartialsPlugin= require('html-webpack-partials-plugin')
module.exports = {
    entry: {
        'app':               './src/index.js',
        'assets/js/banner': './src/assets/js/banner.js',
        'assets/js/tabs': './src/assets/js/tabs.js',
        'assets/js/upload': './src/assets/js/upload.js',
        'assets/js/chart': './src/assets/js/chart.js'

    },
    output: {
        publicPath:"/",
        path: path.join(__dirname, '/app'),
        filename: '[name].js'
    },

    devServer: {
      static: {
        directory: path.join(__dirname, "/app"),
      },
      port: 9000,
      devMiddleware: {
        writeToDisk: true, 
      },
      hot: false, 
      liveReload: true, 
      open: true,
    },
    module: {
        rules: [
          {
            test:/\.m?js/,
            exclude:/node_modules/,
            use:{
              loader:"babel-loader",
              options:{
                presets:['@babel/preset-env']
              }
            }
          },
          {
            test: /\.html$/,
            use:[
                {
                    loader: 'html-loader',
                }
            ]

          },
          {
            test:/\.(sa|sc|c)ss$/,
            use :[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
          },
          {
            test:/\.(svg|eot|woff|woff2|ttf)$/,
            exclude:/images/,
            use:[
              {
                loader :"file-loader",
                options:{
                  name:'[name],[ext]',
                  outputPath:"assets/fonts",
                }
              }
            ]
          },
          {
            test:/\.(png|svg|jpe?g|gif)$/,
            exclude:/fonts/,
            use:[
              {
                loader :"file-loader",
                options:{
                  name:'[name],[ext]',
                  outputPath:"assets/images",
                }
              }
            ]
          },
        ]
    },

    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new OptimizeCSSAssetsPlugin({}),
      new MiniCssExtractPlugin({
        filename:"assets/css/styles.css"
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        chunks:['app' , 'assets/js/banner' ,'assets/js/tabs' ,'assets/js/upload']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/button.html',
        template: './src/components/button.html',
        chunks:['app']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/textfield.html',
        template: './src/components/textfield.html',
        chunks:['app']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/card.html',
        template: './src/components/card.html',
        chunks:['app']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/banner.html',
        template: './src/components/banner.html',
        chunks :['app' , 'assets/js/banner']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/list.html',
        template: './src/components/list.html',
        chunks:['app']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/tabs.html',
        template: './src/components/tabs.html',
        chunks:['app','assets/js/tabs']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/upload.html',
        template: './src/components/upload.html',
        chunks:['app' ,'assets/js/upload']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/help.html',
        template: './src/components/help.html',
        chunks:['app']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/summary.html',
        template: './src/components/summary.html',
        chunks:['app']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/action.html',
        template: './src/components/action.html',
        chunks:['app']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/sidebar.html',
        template: './src/components/sidebar.html',
        chunks:['app']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/table.html',
        template: './src/components/table.html',
        chunks:['app']
      }),
      new HtmlWebpackPlugin({
        filename: 'components/chart.html',
        template: './src/components/chart.html',
        chunks:['app' , 'assets/js/chart' ]
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/action.html'),
        location: 'action',
        template__filename:['index.html']
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/help.html'),
        location: 'help',
        template__filename:['index.html']
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/banner.html'),
        location: 'banner'
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/chart.html'),
        location: 'chart'
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/list.html'),
        location: 'list'
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/sidebar.html'),
        location: 'sidebar'
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/summary.html'),
        location: 'summary'
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/table.html'),
        location: 'table'
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/tabs.html'),
        location: 'tabs'
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/template.html'),
        location: 'template'
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/textfield.html'),
        location: 'textfield'
      }),
      new HtmlWebpackPartialsPlugin ({
        path : path.join(__dirname, './src/components/upload.html'),
        location: 'upload'
      }),
    ]

}