const path = require('path');
module.exports = {
   entry: './src/studioAgentBridge.ts',
   mode: 'development',
   devtool: 'inline-source-map',
   watch: false,
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   resolve: {
      extensions: ['.ts', '.js'],
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
};