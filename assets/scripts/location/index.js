'use strict'
const events = require('./testEvent')

$(() => {
  $('#getLocation').on('submit', events.onGetMaps)
})