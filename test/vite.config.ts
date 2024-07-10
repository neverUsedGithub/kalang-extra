import { existsSync } from "fs";
import { defineConfig } from "vite";
import { transpileString } from "kalang";

export default defineConfig({
  plugins: [
    {
      name: "kalang-plugin",
      transform(code, id, options) {
        if (id.endsWith(".ka")) {
          return {
            code: transpileString(code, id, { exists: existsSync }),
          };
        }
      },
    },
  ],
});
