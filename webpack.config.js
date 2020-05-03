const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');

// const envPath = (env) => {
//   return env.production === 'true' ? './.env' : './.env.local'
// }

module.exports = env => {

  console.log('webpack env', env)

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'distPlace'),
    },
    devServer: {
      port: 3001, // Specify a port number to listen for requests
      stats: {
        children: false, // Hide children information
        maxModules: 0 // Set the maximum number of modules to be shown
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new Dotenv({
        // custom env file
        path: env.production === 'true' ? './.env' : './.env.local'
      })
    ]
  }
};