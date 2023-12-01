NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const config = {

    mode: 'production',
    entry: {
        index: './src/js/index.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],


    },
    plugins: [
        new NodePolyfillPlugin(),
    ],
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify")
        }
    },

};

module.exports = config;