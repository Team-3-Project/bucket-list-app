'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
require('./auth/auth')
//handlebars demo
const bookEvents = require('./bucket/bucketEvents.js')

// handelbars demo end

$(() => {
  // handlebars demo
  bookEvents.addHandlers()

  // handlebars demo end

const bucketEvents = require('./bucket/bucketEvents')
const locationEvents = require('./locations/locationEvents')
$(() => {
  locationEvents.getLocations()
  bucketEvents.addHandlers()

  // click handler for testing bootstrap manipulation, can move later
  $("#markAsCompleted").click(function () {
    event.preventDefault()
    $('#cardTest').addClass("bg-success text-white")
  })


})
