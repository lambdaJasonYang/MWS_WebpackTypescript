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
        filename: '[name].js', //[name] takes up the `bundle` key string
        clean: true,
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i, //regex to detect sass file
            use: ['style-loader','css-loader','sass-loader']
        }]
    },
    plugins : [
        new HTMLWebpackPlugin({
            title: "Webpack App",
            filename: "index.html",
            template: "src/template.html" //you can omit this but index.html can't be customized to your liking
        })
    ]
}