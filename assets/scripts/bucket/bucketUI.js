
const showItemSuccess = function () {

}

const onCreateItemSuccess = function () {
  console.log('create suceess')
  $('#getBlItemsButton').click()

}

const onDeleteItemSuccess = function () {

}

const onUpdateItemSuccess = function () {

}

const onError = function () {

}

// handlebars demo
const accordionTemplate = require('../templates/book-listing.handlebars')

const getBlItemsSuccess = (data) => {
  const showAccordion = accordionTemplate({ blItems: data.blItems })
  $('.content').html(showAccordion)
}

const clearBlItems = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}


module.exports = {
  onCreateItemSuccess,
  showItemSuccess,
  onDeleteItemSuccess,
  onUpdateItemSuccess,
  getBlItemsSuccess,
  clearBlItems,
  failure,
  onError
}
