# Office-Addin-Vue2-Webpack-JS
This repository contains an Excel Add-in project based on Vue2 with Office Add-in development tool chain.
  
This project is created based on steps in [Use Vue to build an Excel task pane add-in](https://learn.microsoft.com/en-us/office/dev/add-ins/quickstarts/excel-quickstart-vue) and also added Office Add-in development related configuration like debugging, manifest validating and so on.

* Vue2 + Webpack (Generated by `@vue/cli`)
* JavaScript
* Excel API

### Notice
Project based on this template might use ES6 JavaScript, which is not compatible with [older versions of Office that use the Trident (Internet Explorer 11) browser engine](https://learn.microsoft.com/en-us/office/dev/add-ins/concepts/browsers-used-by-office-web-add-ins). For information on how to support those platforms in your add-in, see [Support older Microsoft webviews and Office versions](https://learn.microsoft.com/en-us/office/dev/add-ins/develop/support-ie-11).

## Project setup
Clone this repo and run: `npm install`

## Run and debug
1. Start dev server: `npm run serve`
2. Debug in Office
    * Debug in Office on Windows/macOS: `npm run start:desktop`
    * Debug in Office Online: [Refer the steps in this link](https://github.com/OfficeDev/Excel-Scenario-based-Add-in-Samples/blob/main/Mail-Merge-Sample-Add-in/README.md#sideload-the-sample-add-in-on-excel-online)
  
## Feedback
[Create an issue]( https://github.com/BuWH/Office-Addin-Vue2-Webpack-JS/issues/new) if you meet bugs or have feature request.

## Disclaimer
This repo is community contributed and do not have official support by Microsoft.
