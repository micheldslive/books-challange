module.exports = {
  roots: ['<rootDir>'],
  verbose: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['src/**/*.test.ts(x)?', '!src/**/*-stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  bail: 1,
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '\\.svg$': '<rootDir>/.jest/svg.ts',
    '@/(.*)': '<rootDir>/src/$1',
    '@/public/(.*)': '<rootDir>/public/$1',
  },
}
