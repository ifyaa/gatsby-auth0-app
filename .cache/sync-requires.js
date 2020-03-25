const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nasa/venv_test/gatsby-auth0-app/.cache/dev-404-page.js"))),
  "component---src-pages-account-js": hot(preferDefault(require("/Users/nasa/venv_test/gatsby-auth0-app/src/pages/account.js"))),
  "component---src-pages-callback-js": hot(preferDefault(require("/Users/nasa/venv_test/gatsby-auth0-app/src/pages/callback.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nasa/venv_test/gatsby-auth0-app/src/pages/index.js")))
}

