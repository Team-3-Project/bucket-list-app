// 'use strict'
const store = require('../store')

const onSignUpSuccess = function () {

}

const onSignUpFailure = function () {

}


const onSignInSuccess = function (data) {
  store.user = data.user
  $('#loginPage').css('display', 'none')
  $('#mainPage').css('display', 'block')
  $('#getBlItemsButton').click()

}
const onSignInFailure = function (error) {

}

const onChangePasswordSuccess = function () {

}

const onChangePasswordFailure = function () {

}

const onSignOutSuccess = function () {

  location.reload();

}

const onSignOutFailure = function () {

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
