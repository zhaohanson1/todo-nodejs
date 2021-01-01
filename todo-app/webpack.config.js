var path = require('path');

module.exports = {
    entry: './public/js/TodoApp.jsx',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
    }
};