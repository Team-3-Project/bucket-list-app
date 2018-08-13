// 'use strict'
const store = require('../store')

const onSignUpSuccess = function () {
  $('#sign-up').trigger('reset')
}
const resetForms = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
}

const onSignUpSuccess = function () {
  $('#signUpModalCenter').modal('toggle')
}

const onSignUpFailure = function () {
  $('#sign-up').trigger('reset')
  $('#errorModal').modal('toggle')
}

const onSignInSuccess = function (data) {
  store.user = data.user
  $('#loginPage').css('display', 'none')
  $('#mainPage').css('display', 'block')
  $('#sign-in-message').text('Signed in successfully.')
  $('#sign-in-message').css('background-color', 'green')
  $('#getBlItemsButton').click()

}
const onSignInFailure = function (error) {
  $('#sign-in').trigger('reset')
  $('#sign-in-message').text('Signed in failed.')
  $('#errorModal').modal('toggle');

}

const onChangePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#passwordField').text('Changed password successfully')
}

const onChangePasswordFailure = function () {
  $('#change-password').trigger('reset')
  $('#change-password-message').text('Password change failed.')
  $('#change-password-message').css('background-color', 'red')
  $('#errorModal').modal('toggle')
}

const onSignOutSuccess = function () {

  location.reload()

}

const onSignOutFailure = function () {
  $('#sign-out-message').text('Signed out failed.')
  $('#sign-out-message').css('background-color', 'red')

  $('#errorModal').modal('toggle')
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
