'use strict'

const config = require('../config')
const store = require('../store')

const getItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const showItem = (itemId) => {
  return $.ajax({
    url: config.apiUrl + '/items/' + itemId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteItem = (itemId) => {
  return $.ajax({
    url: config.apiUrl + '/items/' + itemId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateItem = function (data) {
  // console.log(data)
  // console.log(data.item.id)
  // console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/items/' + data.item.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createItem = function (data) {
  // console.log(data)
  // console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// handlebars demo
const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books'
  })
}

const deleteBook = (bookId) => {
  return $.ajax({
    url: config.apiUrl + '/books/' + bookId,
    method: 'DELETE'
  })
}

// handebars demo end

module.exports = {
  getItems,
  deleteItem,
  createItem,
  updateItem,
  // handebars
  deleteBook,
  getBooks,
  // handebars end
  showItem
}
