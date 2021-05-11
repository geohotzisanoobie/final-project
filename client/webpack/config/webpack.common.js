import { SRC_DIR } from "../utils/constants";
import { merge } from "webpack-merge";

import * as modules from "../modules";

const env = process.env.NODE_ENV;

export default () =>
  merge(
    {
      entry: [SRC_DIR],
    },
    modules.setupHtml(),
    modules.loadStyles(env)
  );
