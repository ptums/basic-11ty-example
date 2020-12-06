const axios = require('axios')

exports.handler = async function(event, context, callback) {
  console.log(event.queryStringParameters) 
  const term = event.queryStringParameters

  const response = await axios.get(`https://poetrydb.org/lines/${term}`)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response[0].lines.join())
  });
}