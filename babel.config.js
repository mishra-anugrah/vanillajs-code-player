"use strict";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
  ],
  plugins: ["transform-amd-to-commonjs", "@babel/plugin-transform-runtime"],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
          },
        ],
      ],
      plugins: ["babel-plugin-transform-import-meta"],
    },
  },
};
