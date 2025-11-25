import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, ...compat.config({
  rules: {
    "no-console": "error",
    "no-unused-vars": "error",
    "no-var": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "no-alert": "error",
    "consistent-return": "error",
    "no-nested-ternary": "off",
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
    "unicorn/import-style": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          e: {
            error: false,
            event: false,
          },
          env: {
            environment: false,
          },
          err: {
            error: true,
          },
          ev: {
            event: true,
          },
          evt: {
            event: true,
          },
          idx: {
            index: false,
          },
          msg: {
            message: false,
          },
          props: {
            properties: false,
          },
          prop: {
            property: false,
          },
          param: {
            parameter: false,
          },
          params: {
            parameters: false,
          },
          res: {
            resource: true,
            response: true,
            result: true,
          },
          src: {
            source: true,
          },
          temp: {
            temporary: true,
          },
          tmp: {
            temporary: true,
          },
          util: {
            utility: true,
          },
          utils: {
            utilities: false,
          },
          val: {
            value: true,
          },
          var: {
            variable: true,
          },
          vars: {
            variables: true,
          },
        },
      },
    ],
  }
}), eslintPluginUnicorn.configs.recommended, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];

export default eslintConfig;
