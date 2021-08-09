module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: [
    'react',
    '@typescript-eslint',
  ],

  overrides: [{
    files: ['*.ts', '*.tsx'],

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
      },
    },

    rules: {
      // Modify existing rules to allow them to work with TypeScript
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
      'import/extensions': [2, { ts: 'never', tsx: 'never' }],

      // Disable rules already handled by TypeScript language features
      'no-unused-vars': 'off',
    },
  }],
};
