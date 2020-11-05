module.exports = {
  plugins: [
      [
          "@babel/plugin-transform-runtime", // https://babeljs.io/docs/en/babel-plugin-transform-runtime
          {
              regenerator: true,
          },
      ],
  ],
  presets: [
      [
          "@babel/env", // https://babeljs.io/docs/en/babel-preset-env
          {
              targets: {
                  node: "current",
              },
              modules: "commonjs",
          },
      ],
      "@babel/typescript",
  ]
};
