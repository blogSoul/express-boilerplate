let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: ['../frontend/src/javascripts/App.js', '../frontend/src/stylesheets/style.css' ],
    output: {
        path: path.resolve(__dirname, "../frontend/dist"),
        filename: "bundle.js",
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
            ,
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: path.join(__dirname, '../frontend/src/index.html')
        }
    )]
}
