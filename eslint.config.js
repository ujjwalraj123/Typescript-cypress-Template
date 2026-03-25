import js from "@eslint/js";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
import cypress from "eslint-plugin-cypress";
import prettier from "eslint-plugin-prettier";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "unused-imports": unusedImports,
      cypress,
      prettier,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "prettier/prettier": "error",
    },
  },

  {
    files: ["cypress/**/*.ts"],
    ...cypress.configs.recommended,
  },
];
