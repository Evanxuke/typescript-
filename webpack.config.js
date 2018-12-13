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
    entry: "./src/index.tsx",
    output: {
        filename: '[name].bundle.js?v=' + now,
        publicPath: './dist/',
        path: path.join(__dirname, '.', 'dist')
    },

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
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {test: /\.html$/, loader: 'html-loader'}
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};