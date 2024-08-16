// // postcss.config.mjs
// import postcssFlexbugsFixes from "postcss-flexbugs-fixes";
// import postcssPresetEnv from "postcss-preset-env";
// import cssnano from "cssnano";

// export default {
//   plugins: [
//     postcssFlexbugsFixes(),
//     postcssPresetEnv({
//       stage: 3,
//       features: {
//         "custom-properties": true,
//         "nesting-rules": true,
//       },
//       browsers: ["> 1%", "last 2 versions"],
//     }),
//     cssnano({
//       preset: [
//         "default",
//         {
//           discardComments: { removeAll: true },
//         },
//       ],
//     }),
//   ],
// };

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
