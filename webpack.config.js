const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const now = Math.floor(Date.now() / 1000).toString();
const plugins = [
    new HtmlWebpackPlugin({
        title: 'test',
        inject: 'body',
        filename: 'html/index.html',
        template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
]

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: '[name].bundle.js?v=' + now,
        publicPath: './dist/',
        path: path.join(__dirname, '.', 'dist')
    },
    mode: 'development',
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        contentBase: path.join(__dirname, '.'),
        port: 8004,
        hot: true,
        publicPath: '/dist',
        inline: true
    },
    plugins: plugins,

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.js|.tsx|.ts?$/, exclude: /node_modules|plugins/, loader: ["babel-loader"]},
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {test: /\.html$/, loader: 'html-loader'},
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};