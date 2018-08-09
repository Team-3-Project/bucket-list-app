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
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').html(showBooksHtml)
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  clearBooks,
  failure
}
// end handlebars demo

module.exports = {
  onCreateItemSuccess,
  getItemsSuccess,
  showItemSuccess,
  onDeleteItemSuccess,
  onUpdateItemSuccess,
  // handlebars
  getBooksSuccess,
  clearBooks,
  failure,
  // end handlebars
  onError
}
