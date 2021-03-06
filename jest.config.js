module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  verbose: true,
  testTimeout: 30000,
  modulePathIgnorePatterns: ['node_modules', '<rootDir>/dist/'],
  testRegex: ['.e2e-spec.ts$', '.spec.ts$'],
};
