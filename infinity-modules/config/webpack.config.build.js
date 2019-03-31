const path = require('path');

process.env.NODE_ENV = 'production';

module.exports = {
	entry: './src/components/index.js',
	output: {
		path: path.resolve(__dirname, '../lib'),
		filename: 'index.js',
		libraryTarget: 'umd',
		library: 'ReactComponentNpm'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}, {
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					require.resolve('style-loader'), {
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]__[local]--[hash:base64:5]"
						}
					}
				]
			}
		]
	}
}
