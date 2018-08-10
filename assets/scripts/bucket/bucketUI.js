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
const showBooksTemplate = require('../templates/book-listing.handlebars')

const getBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ blItems: data.blItems })
  $('.content').html(showBooksHtml)
}

const clearBooks = () => {
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
  getBooksSuccess,
  clearBooks,
  failure,
  onError
}
