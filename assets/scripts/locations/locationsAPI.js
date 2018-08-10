'use strict'

const config = require('../config')
const store = require('../store')

const getlocations = function () {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'GET'
  })
}
const showlocation = (locationId) => {
  return $.ajax({
    url: config.apiUrl + '/locations/' + locationId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletelocation = (locationId) => {
  return $.ajax({
    url: config.apiUrl + '/locations/' + locationId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatelocation = function (data) {
  // console.log(data)
  // console.log(data.location.id)
  // console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/locations/' + data.location.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createlocation = function (data) {
  console.log(data)
  console.log(store)
  
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      location: {
        name: data.location.location_name,
        description: data.location.description,
        location: data.location.name,
        owner: store.user._id
      }
    }
  })
}

module.exports = {
  getlocations,
  deletelocation,
  createlocation,
  updatelocation,
  showlocation
}
