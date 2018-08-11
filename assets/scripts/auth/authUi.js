// 'use strict'
const store = require('../store')

const resetForms = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()

}

const onSignUpSuccess = function () {
  $('#sign-up-message').text('Signed up successfully.')
  $('#sign-up-message').css('background-color', 'green')
}

const onSignUpFailure = function () {
  $('#sign-up-message').text('Signed up failed.')
  $('#sign-up-message').css('background-color', 'red')
}

const onSignInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-message').text('Signed in successfully.')
  $('#sign-in-message').css('background-color', 'green')
}
const onSignInFailure = function (error) {
  console.log(error)
  $('#sign-in-message').text('Signed in failed.')
  $('#sign-in-message').css('background-color', 'red')
}

const onChangePasswordSuccess = function () {
  $('#change-password-message').text('Changed password successfully.')
  $('#change-password-message').css('background-color', 'green')
}

const onChangePasswordFailure = function () {
  $('#change-password-message').text('Password change failed.')
  $('#change-password-message').css('background-color', 'red')
}

const onSignOutSuccess = function (data) {
  $('#sign-out-message').text('Signed out successfully.')
  $('#sign-out-message').css('background-color', 'green')
  $('.search-results').html('')
  store.user = null
}

const onSignOutFailure = function (error) {
  $('#sign-out-message').text('Signed out failed.')
  $('#sign-out-message').css('background-color', 'red')
  console.log('signOutFailure ran. Data is:', error)
}

module.exports = {
  // onSuccess
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
// const onSuccess = function (data) {
//     let elemId

//   $('#message').text(`${onSuccess.caller} has run successfully.`)

//   $('#message').css('background-color', 'green')
// }

// const onFailure = function (error, callingMethod) {
//   $('#message').text(`${callingMethod} failed.`)
//   $('#message').css(['background-color', 'red'], ['color', 'white'])
//   console.log(`${callingMethod} ran, Error returned is: ' + ${error}`)
// }
