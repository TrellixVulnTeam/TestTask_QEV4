let path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OpimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd) {
        config.minimizer = [
            new TerserWebpackPlugin(),
            new OpimizeCssAssetsWebpackPlugin()
        ]
    }
    return config
}



const generateHtmlPlugin = (fileName) => {
    return new HTMLWebpackPlugin({
      filename: `${fileName}.html`,
      template: `./src/html/${fileName.toLowerCase()}.html`,
      minify: {
        collapseWhitespace: isProd
      },
      favicon: './src/calendar-icon.jpg',
      chunks: [`${fileName}`]
    });
  };
  
const populateHtmlPlugins = (pagesArray) => {
const res = [];
pagesArray.forEach(page => {
    res.push(generateHtmlPlugin(page));
})
return res;
};

const pages = populateHtmlPlugins(['calendar', 'create-event']);
const [calendar, create_event] = pages;

module.exports = {
    mode:'development',
    entry: {
        calendar: ['@babel/polyfill', './src/js/calendar.js'],
        create_event: ['@babel/polyfill','./src/js/create-event.js'] 
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    devtool: "source-map",
    plugins:[
        new HtmlWebpackPlugin({
            filename:'create-event.html',
            template: './src/html/create-event.html',
            excludeChunks: ['calendar']
        }),
        new HtmlWebpackPlugin({
            filename: 'calendar.html',
            chunks: ['calendar'],
            template: './src/html/calendar.html',
            filename: 'calendar.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader']
            },
                {
                  test: /\.m?js$/,
                  exclude: /node_modules/,
                  use: {
                    loader: "babel-loader",
                    options: {
                      presets: [
                          '@babel/preset-env'
                        ]
                    }
                  }
                }
        ]
    }
};