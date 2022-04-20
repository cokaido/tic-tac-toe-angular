module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  overrides: [
    {
      plugins: ['unused-imports'],
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true,
      },
      extends: ['plugin:@angular-eslint/recommended'],
      rules: {
        '@angular-eslint/no-input-rename': 'off', // Think if we should refactor and enable this
        'unused-imports/no-unused-imports': 'error',
        'no-console': [process.env.CI ? 'error' : 'warn', { allow: ['warn', 'error'] }],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'lodash',
                message: 'Import [module] from lodash/[module] instead',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
};
