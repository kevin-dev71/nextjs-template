// @ts-nocheck
const nextJest = require("next/jest")

const createJestConfig = nextJest({ dir: "./" })

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>/src/config/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
}

module.exports = createJestConfig(customJestConfig)
