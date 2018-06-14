var path = require("path");

module.exports = {
    entry: "./sass/main.scss",
    output: {
        path: path.resolve(__dirname, "sass"),
        filename: "main.css",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
};