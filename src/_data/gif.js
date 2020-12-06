require('dotenv').config()
const axios = require('axios')
const messages = require('./messages')

async function getGif(message) {
  try {
    const queryUrl = `https://api.giphy.com/v1/gifs/search?q=${message}&api_key=${process.env.API_KEY}&limit=1`
    const response = await axios.get(queryUrl)

    return {
     "message": message,
     "url": response.data.data[0]
    }
  } catch(error) {
    console.error(error)
  }
}

module.exports = async function() {
  var messageGif = messages.map(getGif)
  
  return Promise.all(messageGif).then(gifObj => {
    console.log(gifObj.gif)
    return [].concat.apply([], gifObj)
  })  
}