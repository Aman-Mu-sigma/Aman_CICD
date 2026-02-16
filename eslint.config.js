const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-console": "off"
    }
  }
];
