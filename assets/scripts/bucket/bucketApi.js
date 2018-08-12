'use strict'

const config = require('../config')
const store = require('../store')

// const showItem = (itemId) => {
//   return $.ajax({
//     url: config.apiUrl + '/bl-items/' + itemId,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

// const deleteItem = (itemId) => {
//   return $.ajax({
//     url: config.apiUrl + '/bl-items/' + itemId,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const updateItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/bl-items/' + data.item.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/bl-items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      item: {
        name: data.item.item_name,
        description: data.item.description,
        location: data.Locations,
        owner: store.user._id
      }
    }
  })
}

// handlebars demo
const getBlitems = function () {
  return $.ajax({
    url: config.apiUrl + '/bl-items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteBlItem = (itemId) => {
  return $.ajax({
    url: config.apiUrl + '/bl-items/' + itemId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// handebars demo end

module.exports = {
  getItems,
  deleteItem,
  createItem,
  updateItem,
  deleteBlItem,
  getBlitems,
  showItem
}
