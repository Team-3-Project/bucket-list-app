/*https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY
*/
const getMap = function(data) {
  console.log(`data in getMap function before API call = ${data}`)
  debugger
  return $.ajax({
      url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${data.location.search}&inputType=textquery&fields=photos,formatted_address,name&AIzaSyC5wNV04ith9KVc4KkgL49HL3D0Gc1i69Q`,
      method: 'Get',
      data
  })
}

module.exports = getMap