import nextJest from 'next/jest';
import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^@/components/(.*)$': '<rootDir>/components/',
    '^@/app/(.*)$': '<rootDir>/app/',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    'hooks/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/*.d.ts',
    '!**/__tests__/**',
    '!**/jest.setup.ts',
  ],
};

export default createJestConfig(customJestConfig);
