const { defineConfig } = require('@vue/cli-service')
const fs = require("fs")
const path = require("path")
const homedir = require('os').homedir()
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(`${homedir}/.office-addin-dev-certs/localhost.key`)),
      cert: fs.readFileSync(path.resolve(`${homedir}/.office-addin-dev-certs/localhost.crt`)),
      ca: fs.readFileSync(path.resolve(`${homedir}/.office-addin-dev-certs/ca.crt`)),
     }
   },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "add-in/assets/*",
            to: "assets/[name][ext][query]",
          },
          {
            from: "add-in/manifest*.xml",
            to: "[name]" + "[ext]",
          },
        ],
      }),
    ]
   }
})
