require('dotenv').config()
const axios = require('axios')


module.exports = async function() {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`)
    return response.data.data.image_url
  } catch(error) {
    console.error(error)
  }
}