const axios = require('axios')

exports.handler = async function(event, context, callback) {
  const term = event.queryStringParameters.term
  console.log(term)

  const response = await axios.get(`https://poetrydb.org/lines/${term}`)
  cons
  callback(null, {
    statusCode: 200,
    body: response
  });
}