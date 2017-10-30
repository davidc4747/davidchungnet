
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    devServer: {
        publicPath: "/public/",
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                //exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require("postcss-cssnext")
                            ]
                        }
                    }
                ]
            }
        ]
    }
};