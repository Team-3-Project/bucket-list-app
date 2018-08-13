'use strict'

let apiUrl
const apiUrls = {
  production: 'https://boiling-harbor-16682.herokuapp.com',
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
