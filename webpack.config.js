const path = require('path')
const webpack = require('webpack')

const config = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  mode: "development",
  // target: "node",
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  externals: ["fs"],
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        API_KEY: JSON.stringify(process.env.API_KEY),
      },
    }),  
  ],
  devtool: 'source-map'
}

module.exports = config


