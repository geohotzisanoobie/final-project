import { merge } from "webpack-merge";

import getCommonConfig from "./webpack.common";

import { DIST_DIR } from "../utils/constants";

export default () =>
  merge(getCommonConfig(), {
    output: {
      filename: "[name].js",
      path: DIST_DIR,
    },
  });
