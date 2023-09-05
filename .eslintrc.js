module.exports = {
    root: true,
    extends: [
      '@react-native-community',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'prettier',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          '@typescript-eslint/no-shadow': ['error'],
          "@typescript-eslint/comma-dangle": "error",
          'no-shadow': 'off',
          'no-undef': 'off',
          "comma-dangle": "off"
        },
      },
    ],
  };
  