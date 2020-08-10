import * as path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { ConfigurationFactory } from "webpack";

const config: ConfigurationFactory = () => ({
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    "content/index": path.join(__dirname, "src", "content", "index.ts"),
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            configFile: "tsconfig.build.json",
          },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "static"),
          to: ".",
        },
      ],
    }),
  ],
});

export default config;
