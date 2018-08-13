'use strict'

let apiUrl
const apiUrls = {
  production: 'https://team-3-project.github.io/bucket-list-app',
  development: 'http://localhost:4741'
  // commented out for handlebars practice
  // development: 'https://ga-library-api.herokuapp.com'
}


if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
