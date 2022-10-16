module.exports = {
  // Run type-check on changes to TypeScript files
  "**/*.ts?(x)": () => "yarn type-check",
  // Run ESLint on changes to JavaScript/TypeScript files
  "**/*.(ts|js)?(x)": (filenames) => [
    `npx eslint ${filenames.join(" ")} --fix`,
    `yarn format:fix ${filenames.join(" ")}`,
    `yarn lint . ${filenames.join(" ")}`,
  ],
}
