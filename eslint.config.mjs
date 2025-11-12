import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: { globals: jest.environments.globals.globals },
    plugins: { jest },
    rules: { ...jest.configs["flat/recommended"].rules },
  },
  eslintConfigPrettier,
]);
