'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const bucketApi = require('./bucketApi')
const bucketUi = require('./bucketUI')

const onDeleteItem = function (event) {
  event.preventDefault()
  const itemId = $(event.target).closest('ul').attr('data-id')
  bucketApi.deleteItem(itemId)
  //   .then(bucketUi.onDeleteItemSuccess)
  //   .catch(bucketUi.onError)
}

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
    .then(bucketUi.onCreateItemSuccess)
    // if API call fails, call an error function in UI
    .catch(bucketUi.failure)
}

const onGetBlItems = (event) => {
  event.preventDefault()
  bucketApi.getBlitems()
    .then(bucketUi.getBlItemsSuccess)
    .catch(bucketUi.failure)
}

const onClearBlItems = (event) => {
  event.preventDefault()
  bucketUi.clearBlItems()
}

const onDeleteBlItem = (event) => {
  event.preventDefault()
  const itemId = $(event.target).closest('div').attr('data-id')
  bucketApi.deleteBlItem(itemId)
    .then(() => onGetBlItems(event))
    .catch(bucketUi.failure)
}

const onUpdateItem = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target.form)
  const itemId = $(event.target).closest('div').attr('data-id')
  bucketApi.updateItem(data, itemId)
  .then(() => onGetBlItems(event))
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

  $('#getBlItemsButton').on('click', onGetBlItems)
  $('#clearBlItemsButton').on('click', onClearBlItems)
  $('.content').on('click', '.btn-danger', onDeleteBlItem)
  $('.content').on('click', '.btn-secondary', onUpdateItem)

  $('.updater').on('submit', onUpdateItem)

}

// end seciton handebars demo

module.exports = {
  addHandlers
}
