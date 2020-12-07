const axios = require('axios')

exports.handler = async function(event, context, callback) {
  const term = event.queryStringParameters.term
  const response = await axios.get(`https://poetrydb.org/lines/${term}`)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: response.data[0].lines.join(),
      msg: "Here's a poem.",
      status: 200
    })
  });
}