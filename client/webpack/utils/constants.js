import { path as ROOT_DIR } from "app-root-path";
import { resolve } from "path";

export { ROOT_DIR };
export const SRC_DIR = resolve(path, "src");
export const DIST_DIR = resolve(path, "dist");
export const BUILD_DIR = resolve(path, "build");
