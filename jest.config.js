const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest', // added this line
    '.+\\.(css|csv|style|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
};
module.exports = createJestConfig(customJestConfig);
