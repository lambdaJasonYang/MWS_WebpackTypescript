const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

//commonJS syntax

module.exports = {
    mode: 'development',
    entry: {
        bleh: path.resolve(__dirname, 'src/index.js'), //"main" key can be anything like "bundle"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js', //[name] takes up the `bundle` key string
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i, //regex to detect sass file
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env'],
                    },
                }
            }
        ]
    },
    plugins : [
        new HTMLWebpackPlugin({
            bleh: "Webpack App",
            filename: "index.html",
            template: "src/template.html" //you can omit this but index.html can't be customized to your liking
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 5555,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    devtool: 'source-map', 
    //the compiled website is obfusticated JS, and errors will only show the compiled JS
    //source-map lets you know where in your source is your error
}