// 添加路径模块
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')
// 导出配置信息的对象
module.exports = {
  // 设置导入的文件路径
  entry: './src/main.js',
  // 设置文件的导出路径
  output: {
    path: path.join(__dirname + '/dist'),
    filename: 'hebing.js'
  },
  // 添加加载器,全部加载器都放在这个module集合中
  module: {
    rules: [
      // 配置解析.vue文件的加载器
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // 配置解析.css文件的加载器
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 处理图片的加载器
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit:25000
        //     }
        //   }
        // ]
        use: 'url-loader?limit=2500'
      },
      // 和上面的基本一样,所以我们把它们重合在一起
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}  
      //     }
      //   ]
      // }
      // babel-loader  用于把 es6语法  转为 es5
      // npm install babel-loader babel-core babel-preset-env webpack
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   // include: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['env']
      //     }
      //   }
      // }
    ]
  },


  // webpack-dev-server的一些配置信息
  devtool: 'eval',
  devServer: {
    contentBase: __dirname + '/src', // 当前服务器监听的路径
    hot: true,  // 热更新
    port: 8080,  // 定义端口号
    host: 'localhost',
    open: true,    // 是否自动打开浏览器
    openPage: ''
  },

  // webpack中的插件添加
  plugins: [
    // 自动生成html文件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      htmlWebpackPlugin: {
        "files": {
          "css": [""],
          "js": ["hebing.js"]
        }
      },
      // 压缩 情怀至上
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),

       // 压缩的插件,但是我们一般不用,用-p
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
  ]

}