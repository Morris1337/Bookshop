let path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "./js/main.js"),
    output: {
        path: path.resolve(__dirname, "output"),
        filename: "index.js"
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.scss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        ],
      },
}