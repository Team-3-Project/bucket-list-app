'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const bucketApi = require('./bucketApi')
const bucketUi = require('./bucketUI')

// section for handebars demo

// const onGetBooks = (event) => {
//  event.preventDefault()
//  bucketApi.getBooks()
//    .then(bucketUi.getBooksSuccess)
//    .catch(bucketUi.failure)

const onGetItems = function(event) {
    event.preventDefault()
    bucketApi.getItems()
        // .then(bucketUi.getItemsSuccess)
        // .catch(bucketUi.onError)
}


const onShowItem = function(event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    // could put some input validation here if we want
    // message the user if validation fails
    bucketApi.showItem(data)
        // .then(bucketUi.showItemSuccess)
        // .catch(bucketUi.onError)
}


const onDeleteItem = function(event) {
    event.preventDefault()
    const itemId = $(event.target).closest('ul').attr('data-id')
    bucketApi.deleteItem(itemId)
    //   .then(bucketUi.onDeleteItemSuccess)
    //   .catch(bucketUi.onError)
}


// const onUpdateItem = function (event) {
 //   event.preventDefault()
 //   const data = getFormFields(event.target)
 //   // could put some input validation here if we want
//    // message the user if validation fails
//    bucketApi.updateItem(data)
//        // .then(bucketUi.onUpdateItemSuccess)
//        // .catch(bucketUi.onError)
//    }


const onCreateItem = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    // could put some input validation here if we want
    // message the user if validation fails

    //bucketApi.createItem(data)
        // .then(bucketUi.onCreateItemSuccess)
        // .catch(bucketUi.onError)

    // make API call
    bucketApi.createItem(data)
    // if API call is successful, call a success function in UI
    .then(() => console.log(data))
    .then(() => {debugger})
    // if API call fails, call an error function in UI
    .catch(() => console.log("error"))
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

const onUpdateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('logging update')
  console.log(data)
  // bucketApi.updateItem(data)
  // .then(bucketUi.onUpdateItemSuccess)
  // .catch(bucketUi.onError)

}
const addHandlers = () => { 
    // for each of the following replace the spaces between the sets of single quotes:
    // add the HTML id, class, or element we want to attach an event to, and the event/s
    // optional: add a selector and/or data before the event/s
    // $(' ').on(' ', onGetItems)
    // $(' ').on(' ', onShowItem)
    // $(' ').on(' ', onDeleteItem)
    // $(' ').on(' ', onUpdateItem)
    $('#create-item').on('submit', onCreateItem)
  
    $('#getBooksButton').on('click', onGetBooks)
  $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('click', '.btn-danger', onDeleteBook)
  $('.content').on('click', '.btn-secondary', onUpdateItem)

}

// end seciton handebars demo

module.exports = {
  addHandlers
}
