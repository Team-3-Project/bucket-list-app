const getItemsSuccess = function () {

}

const showItemSuccess = function () {

}

const onCreateItemSuccess = function () {

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
  getItemsSuccess,
  showItemSuccess,
  onDeleteItemSuccess,
  onUpdateItemSuccess,
  getBlItemsSuccess,
  clearBlItems,
  failure,
  onError
}
