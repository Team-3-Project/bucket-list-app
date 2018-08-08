'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
require('./auth/auth')
$(() => {
  // your JS code goes here

  // click handler for testing bootstrap manipulation, can move later
  $("#markAsCompleted").click(function(){
    event.preventDefault()
    $('#cardTest').addClass("bg-success text-white")
  })


})
