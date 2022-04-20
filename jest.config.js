module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testMatch: ['**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
};
