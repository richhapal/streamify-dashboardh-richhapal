module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg|png|gif|webp|svg|css)$": "jest-transform-stub",
  },
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: ["/node_modules/(?!lucide-react)"],
};
