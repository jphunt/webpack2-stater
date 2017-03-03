const path = require('path');
module.exports = {
    entry: './app.js',
    output: {
        // path: path.resolve(__dirname),
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        // contentBase: path.resolve(__dirname),
        publicPath: '/dist',
        compress: true,
        port: 9000
    }

}