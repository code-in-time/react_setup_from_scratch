module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx|js)$": "ts-jest"
  },
  verbose: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: 'node',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: true,
  testEnvironment: "jsdom"
}