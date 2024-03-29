/*global module*/
/*eslint no-undef: "error"*/

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
