const path = require ("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js",".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
              },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:'style-loader'
                     },
                     {
                        loader: 'css-loader'
                    }
                    ],
            },
            {
                test: /\.(png|jpg|gif|pdf)$/i,
                    use: [
                                 {
                      loader: 'file-loader',
                      options: {
                        name: 'assets/[hash].[ext]'
                                 }
                               }
                          ]
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            file: "./index.html"
        })
    ]
}
