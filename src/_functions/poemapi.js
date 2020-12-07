const axios = require('axios')

exports.handler = async function(event) {
  try {
    const term = event.queryStringParameters.term
    const response = await axios.get(`https://poetrydb.org/lines/${term}`)

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: response.data[0].lines.join(),
        msg: "Here's a poem.",
        status: 200
      })
    }
  } catch(err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({err: 'Something went wrong!'})
    }
  }
}