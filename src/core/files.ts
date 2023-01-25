import jetpack from "fs-jetpack";
import os from "os";
import path from "path";

/**
 * Creates an instance of the filesystem useable.
 * @returns
 */
export function useFilesystem() {
  const wd_dir = path.resolve(os.homedir(), "TooManySecrets") 
  const wd = jetpack.dir(wd_dir);

  return {
    wd,
    wd_dir,
  };
}
