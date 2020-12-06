(function() {
  
  const term = location.pathname.split('/').filter(a => a !== "")[0]
  fetch(`/.netlify/functions/poemsapi?term=${term}`)
  .then(response => response.json())
  .then(data => {
    const poemElm = document.getElementById('poem')
    console.log(data)
    if(data.body !== undefined) {
      poemElm.innerHTML = data.body
    }else {
      poemElm.innerHTML = `Sorry, there aren't any poems about ${term}.`
    }
  });
})()