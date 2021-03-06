require('dotenv').config()
const axios = require('axios')
const messages = require('./messages')

async function getGif(message) {
  try {
    const queryUrl = `https://api.giphy.com/v1/gifs/search?q=${message}&api_key=${process.env.API_KEY}&limit=1`
    const response = await axios.get(queryUrl)
    console.log()
    return {
     "message": message,
     "url": response.data.data[0].images.original.url
    }
  } catch(error) {
    console.error(error)
  }
}

module.exports = async function() {
  var messageGif = messages.map(getGif)
  
  return Promise.all(messageGif).then(gifObj => {
    return [].concat.apply([], gifObj)
  })  
}