'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const bucketApi = require('./bucketApi.js')
const bucketUi = require('./bucketUI.js')


const onGetItems = (event) => {
    event.preventDefault()
    // make API call
    // if API call is successful, call a success function in UI
    // if API call fails, call an error function in UI
}


const onShowItem = (event) => {
    event.preventDefault()
    // could put some input validation here if we want
    // message the user if validation fails

    // make API call
    // if API call is successful, call a success function in UI
    // if API call fails, call an error function in UI
}


const onDeleteItem = (event) => {
    event.preventDefault()
    // could put some input validation here if we want
    // message the user if validation fails

    // make API call
    // if API call is successful, call a success function in UI
    // if API call fails, call an error function in UI
}


const onUpdateItem = function (event) {
    event.preventDefault()
    // could put some input validation here if we want
    // message the user if validation fails

    // make API call
    // if API call is successful, call a success function in UI
    // if API call fails, call an error function in UI
    }


const onCreateItem = function (event) {
    event.preventDefault()
    // could put some input validation here if we want
    // message the user if validation fails
const data = getFormFields(this)
    // make API call
    bucketApi.createItem(data)
    // if API call is successful, call a success function in UI
    .then(() => console.log(data))
    .then(() => {debugger})
    // if API call fails, call an error function in UI
    .catch(() => console.log("error"))
    
}


const addHandlers = () => { 
    // for each of the following replace the spaces between the sets of single quotes:
    // add the HTML id, class, or element we want to attach an event to, and the event/s
    // optional: add a selector and/or data before the event/s
    // $(' ').on(' ', onGetItems)
    // $(' ').on(' ', onShowItem)
    // $(' ').on(' ', onDeleteItem)
    // $(' ').on(' ', onUpdateItem)
    $('#create-item').on('submit', onCreateItem)
}

module.exports = {
    addHandlers
}