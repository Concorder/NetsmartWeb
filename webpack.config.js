const path = require('path');

module.exports = {
    mode: 'development', // or 'production'
    entry: './src/index.js', // replace with the path to your main JavaScript file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};