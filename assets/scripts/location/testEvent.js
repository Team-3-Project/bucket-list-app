const getFormFields = require('../../../lib/get-form-fields')
const mapsAPI = require('../location/testApi')

const onGetMaps = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  debugger
  mapsAPI.getMap(data)
  .then(() => console.log('fixed????'))
}
module.exports = onGetMaps