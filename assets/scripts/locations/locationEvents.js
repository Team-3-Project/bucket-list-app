'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const locationApi = require('./locationsAPI')
const locationUi = require('./locationUI')

const getLocations = () => {
  locationApi.getlocations()
    .then(function (locations) {
      const dropdown = $('#locationDropdown')
      const locationList = locations
      for(let i = 0; i < locationList.locations.length; i++) {
        dropdown.append(`<option value=${locationList.locations[i].location}>${locationList.locations[i].location}</option>`)
      }
  })
    .catch(() => {return} )
}

module.exports = {
  getLocations
}
