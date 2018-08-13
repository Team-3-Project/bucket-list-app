const onCreateItemSuccess = function () {
  $('#getBlItemsButton').click()

}

const onUpdateItemSuccess = function () {

}

const onError = function () {
  if ($('#notOwner')) {
    $('#notOwner').modal('toggle')
  } else {
    $('#errorModal').modal('toggle')
  }
}

// handlebars demo
const accordionTemplate = require('../templates/book-listing.handlebars')

const getBlItemsSuccess = (data) => {
  const showAccordion = accordionTemplate({
    blItems: data.blItems
  })
  $('.content').html(showAccordion)
}

const clearBlItems = () => {
  $('.content').empty()
}

const failure = (error) => {
  $('#errorModal').modal('toggle');
}


module.exports = {
  onCreateItemSuccess,
  onUpdateItemSuccess,
  getBlItemsSuccess,
  clearBlItems,
  failure,
  onError
}
