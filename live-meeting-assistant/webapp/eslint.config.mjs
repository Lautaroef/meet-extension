import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Specific overrides for websocket-proxy.ts
    files: ["src/server/websocket-proxy.ts"],
    rules: {
      // Warn about unused vars but ignore those starting with _
      "@typescript-eslint/no-unused-vars": ["warn", {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_"
      }],
      // Keep explicit any check for now, can be changed to 'warn' or 'off' if needed
      // "@typescript-eslint/no-explicit-any": "warn", 
    }
  }
];

export default eslintConfig;
