// vue.config.js
const path = require("path");
const webpack = require("webpack");
const dllPath = "./public/vendor/";
const { library } = require("./dll.config.js");

module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://172.16.1.18:8769",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // less: {
      //     // 引入全局变量样式,@使我们设置的别名,执行src目录
      //     data: `
      //         @import "@/my-theme/index.less";
      //     `
      // }
    },
    modules: false
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      let pluginsPro = [
        ...Object.keys(library).map(name => {
          return new webpack.DllReferencePlugin({
            context: ".",
            manifest: path.join(dllPath, `${name}-manifest.json`)
          });
        })
      ];
      config.plugins = config.plugins.concat(pluginsPro);
    }
  }
};
