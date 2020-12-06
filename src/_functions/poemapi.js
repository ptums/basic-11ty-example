const axios = require('axios')

exports.handler = async function(event, context, callback) {
  const term = event.queryStringParameters.term
  console.log(term)

  const response = await axios.get(`https://poetrydb.org/lines/${term}`)
  console.log(response.data[0])
  callback(null, {
    statusCode: 200,
    body: term
  });
}