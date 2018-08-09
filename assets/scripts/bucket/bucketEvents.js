'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const bucketApi = require('./bucketApi.js')
const bucketUi = require('./bucketUI.js')


const onGetItems = (event) => {
  event.preventDefault()
  // make API call
  // if API call is successful, call a success function in UI
  // if API call fails, call an error function in UI
}


const onShowItem = (event) => {
  event.preventDefault()
  // could put some input validation here if we want
  // message the user if validation fails

  // make API call
  // if API call is successful, call a success function in UI
  // if API call fails, call an error function in UI
}


const onDeleteItem = (event) => {
  event.preventDefault()
  // could put some input validation here if we want
  // message the user if validation fails

  // make API call
  // if API call is successful, call a success function in UI
  // if API call fails, call an error function in UI
}


const onUpdateItem = function (event) {
  event.preventDefault()
  // could put some input validation here if we want
  // message the user if validation fails

  // make API call
  // if API call is successful, call a success function in UI
  // if API call fails, call an error function in UI
}


const onCreateItem = function (event) {
  event.preventDefault()
  // could put some input validation here if we want
  // message the user if validation fails

  // make API call
  // if API call is successful, call a success function in UI
  // if API call fails, call an error function in UI
}


// const addHandlers = () => {
//     // for each of the following replace the spaces between the sets of single quotes:
//     // add the HTML id, class, or element we want to attach an event to, and the event/s
//     // optional: add a selector and/or data before the event/s
//     // $(' ').on(' ', onGetItems)
//     // $(' ').on(' ', onShowItem)
//     // $(' ').on(' ', onDeleteItem)
//     // $(' ').on(' ', onCreateItem)
//     // $(' ').on(' ', onUpdateItem)
// }


// section for handebars demo

const onGetBooks = (event) => {
  event.preventDefault()
  bucketApi.getBooks()
    .then(bucketUi.getBooksSuccess)
    .catch(bucketUi.failure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  bucketUi.clearBooks()
}

const onDeleteBook = (event) => {
  event.preventDefault()
  const bookId = $(event.target).closest('div').attr('data-id')
  bucketApi.deleteBook(bookId)
    .then(() => onGetBooks(event))
    .catch(bucketUi.failure)
}

const addHandlers = () => {
  $('#getBooksButton').on('click', onGetBooks)
  $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('click', '.btn-danger', onDeleteBook)
}
// end seciton handebars demo

module.exports = {
  addHandlers
}
