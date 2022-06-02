module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:vue/essential",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ["vue"],
  rules: {},
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./views"]],
        extensions: [".vue"],
      },
    },
  },
};
