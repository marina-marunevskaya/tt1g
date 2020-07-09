const webpack = require('webpack');

module.exports = {
    devServer: {
        contentBase: './dist',
        hot: true
    },
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
