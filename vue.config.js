module.exports = {
  configureWebpack: {
    resove: {
      alias: {
        assets: resolve("src/assets"),
        components: resolve("src/components"),
        common: resolve("src/common"),
        network: resolve("src/network"),
        views: resolve("src/views")
      }
    }
  }
};
//配置别名，写路径会更轻松
