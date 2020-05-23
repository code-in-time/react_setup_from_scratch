const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');

// const envPath = (env) => {
//   return env.production === 'true' ? './.env' : './.env.local'
// }

module.exports = env => {

  // console.log('webpack env', env)

  return {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'distPlace'),
    },
    devServer: {
      liveReload: true,
      overlay: false,
      port: 3001, // Specify a port number to listen for requests
      stats: {
        children: false, // Hide children information
        // maxModules: 0 // Set the maximum number of modules to be shown
      }
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader"
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
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
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