import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import react from "eslint-plugin-react";
export default [
  js.configs.recommended,
  {
    plugins: {
      react,
    },
    rules: {
      "react/no-unescaped-entities": "off", // 🔥 disable the rule
    },
  },
];
import js from "@eslint/js";
import react from "eslint-plugin-react";
export default [
  js.configs.recommended,
  {
    plugins: { react },
    rules: {
      "react/no-unescaped-entities": "off", // 🚀 turn off the blocker
    },
  },
];
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];
export default eslintConfig;
