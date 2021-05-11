import { merge } from "webpack-merge";

import getCommonConfig from "./webpack.common";

import { BUILD_DIR } from "../utils/constants";

export default () =>
  merge(getCommonConfig(), {
    mode: "production",
    devtool: "eval-cheap-module-source-map",
    mode: "development",
    target: "web",
    devtool: false,
    output: {
      filename: "[name].[contenthash].js",
      path: BUILD_DIR,
    },
  });
