import { defineConfig } from "steiger";
import fsd from "@feature-sliced/steiger-plugin";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    ignores: ["**/.gitkeep"],
  },
  {
    // Next.js App Router: FSD layers are prefixed to avoid conflicts with Next.js folders.
    // https://feature-sliced.design/docs/guides/tech/with-nextjs
    files: ["./src/_app/**", "./src/_pages/**"],
    rules: {
      "fsd/typo-in-layer-name": "off",
    },
  },
  {
    // The app layer is unsliced, but steiger treats `_app` as sliced because of the prefix.
    files: ["./src/_app/**"],
    rules: {
      "fsd/no-segmentless-slices": "off",
    },
  },
]);
