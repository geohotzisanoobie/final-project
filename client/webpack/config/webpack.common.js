import { SRC_DIR } from "../utils/constants";
import { merge } from "webpack-merge";

import * as modules from "../modules";

export default () =>
  merge(
    {
      entry: [SRC_DIR],
    },
    modules.setupHtml()
  );
