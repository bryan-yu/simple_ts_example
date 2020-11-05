const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        HelloWorldLambda: `${__dirname}/src/hello_world.ts`
    },
    output: {
        filename: "[name]/index.js",
        path: `${__dirname}/dist/`,
        libraryTarget: "commonjs2",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"],
    },
    target: "node",
    externals: ["aws-sdk"], 
    mode: process.env.NODE_ENV || "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                },
            }),
        ],
    }
}
