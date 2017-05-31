module.exports = {
  entry: "./app/components/main.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders:[{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query:{
        presets:['react','es2015', 'react-hmre']
      }
    }]
  }
}
