const webpack= require('webpack');
const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[name].js',
        publicPath: '/assets/',
        chunkFilename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendor: false,
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /node.modules/
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }

            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            }
        ]
    },
    devServer: {
        port: 8000,
        static: path.resolve(__dirname, 'static'),
        historyApiFallback: true,
        allowedHosts:'all',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true
            }
        }
    }
}
