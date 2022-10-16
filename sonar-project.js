const sonarqubeScanner = require("sonarqube-scanner")

const callbackExit = function () {
  console.log("Sonarqube Scanner was exited...")
}

sonarqubeScanner(
  {
    serverUrl: process.env.SQ_URL,
    options: {
      "sonar.projectKey": process.env.SQ_PROJECT_KEY,
      "sonar.projectName": process.env.SQ_PROJECT_NAME,
      "sonar.sources": "./",
      "sonar.exclusions":
        "*/**.test.js, */**.test.tsx, */**.test.ts, */**.css, */**.scss, */**.d.ts, **/[id].tsx, src/pages/_app.tsx, src/pages/_document.tsx, jest.config.js, lint-staged.config.js, next.config.js, sonar-project.js, public/mockServiceWorker.js",
      "sonar.javascript.lcov.reportPaths": "./coverage/lcov.info",
    },
  },
  callbackExit
)
