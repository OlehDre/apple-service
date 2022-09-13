module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@next/next/recommended",
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        parser: '@typescript-eslint/parser',
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react", '@typescript-eslint', 'prettier'],
    rules: {
      'no-undef': 1,
      "react/no-unknown-property": ["error", { ignore: ["jsx"] }],
      "react/prop-types": "off",
    },
    globals: {
      React: "writable",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };