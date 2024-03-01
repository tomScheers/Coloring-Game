const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './path/to/your/entry/file.js',
    output: {
        filename: 'bundle.min.js',
        path: __dirname + '/dist',
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
};
