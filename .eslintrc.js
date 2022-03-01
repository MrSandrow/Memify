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

  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-param-reassign': ['error', { props: false }],
  },

  overrides: [{
    files: ['*.ts', '*.tsx'],

    rules: {
      /* Modify existing rules to allow them to work with TypeScript */
      'dot-notation': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'import/extensions': ['error', { ts: 'never', tsx: 'never', ttf: 'always' }],

      /* Disable rules already handled by TypeScript language features */
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'react/prop-types': 'off',
      'import/no-unresolved': 'off',
    },
  }],
};
