const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "less-loader"
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Project 1', template: './index.html', inject: 'body' })
    ],
    devServer: {
        open: true,
        compress: true,
        historyApiFallback: true,
        port: 9000
    }
};
