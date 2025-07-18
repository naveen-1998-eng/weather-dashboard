/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Ignore CSS imports
      '^@/(.*)$': '<rootDir>/src/$1', // Optional alias mapping
    },
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  };
  