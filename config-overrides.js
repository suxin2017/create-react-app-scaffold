const path = require('path')
console.log(1234)
module.exports = {
  webpack :function(config,env){
    // ...添加你的webpack配置
    console.log(JSON.stringify(config))

    const alias={
        components: path.resolve(__dirname, 'src/components/'),
        util: path.resolve(__dirname, 'src/util/')
    }
    config.resolve.alias = alias;
    config.module.rules.unshift({
      test: /\.less$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "less-loader" // compiles Less to CSS
      }]
  })
    return config;
 }
    
}