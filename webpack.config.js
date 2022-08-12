const path = require('path');

//commonJS syntax

module.exports = {
    mode: 'development',
    entry: {
        bleh: path.resolve(__dirname, 'src/index.js'), //"main" key can be anything like "bundle"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' //[name] takes up the `bundle` key string
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i, //regex to detect sass file
            use: ['style-loader','css-loader','sass-loader']
        }]
    }
}