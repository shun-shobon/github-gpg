module.exports = {
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.build.json",
    },
  },
  testMatch: ["<rootDir>/test/**/*.spec.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
};
