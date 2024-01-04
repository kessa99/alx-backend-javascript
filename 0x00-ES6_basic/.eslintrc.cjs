module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:import/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', { js: 'always', json: 'always' }],
    'no-console': 'off',
    'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    'no-shadow': 'error',
    'quote-props': ['error', 'as-needed'],
  },
};
