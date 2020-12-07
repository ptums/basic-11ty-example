(function() {  
  const term = location.pathname.split('/').filter(a => a !== "")[0]

  fetch(`/.netlify/functions/poemapi?term=${term.trim()}`)
  .then(response => {
    return response.json()
  })
  .then(res => {    
    const poemElm = document.getElementById('poem')
    if(res.data) {
      poemElm.innerHTML = res.data
    }else {
      poemElm.innerHTML = `Sorry, there aren't any poems about ${term}.`
    }
  })
})()