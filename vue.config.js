const { defineConfig } = require('@vue/cli-service')
const fs = require("fs")
const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Configuration
const devPort = 3000;

// Calculated
const _homeDir = require('os').homedir();

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: devPort,
    https: {
      key: fs.readFileSync(path.resolve(`${_homeDir}/.office-addin-dev-certs/localhost.key`)),
      cert: fs.readFileSync(path.resolve(`${_homeDir}/.office-addin-dev-certs/localhost.crt`)),
      ca: fs.readFileSync(path.resolve(`${_homeDir}/.office-addin-dev-certs/ca.crt`)),
     }
   },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "manifest*.xml",
            to: "[name]" + "[ext]",
          },
        ],
      }),
    ]
   }
})
