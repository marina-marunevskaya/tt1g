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
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
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
