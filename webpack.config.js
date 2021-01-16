module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              /* ... */
            }
          },
          {
            loader: "vue-svg-inline-loader",
            options: {
              /* ... */
            }
          }
        ]
      }
    ],
    resolve: {
      alias: {
        "@": __dirname + "/src/"
      }
    }
  }
};
