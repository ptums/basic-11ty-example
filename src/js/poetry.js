(function() {
  
  const term = location.pathname.split('/').filter(a => a !== "")[0]
  fetch(`https://rachelandmarssite.netlify.app/.netlify/functions/poemapi?term=${term.trim()}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(`%c data: ${JSON.stringify(data)}`,'color: orange; font-size: 32px')
  })
  // .then(data => {
  //   const poemElm = document.getElementById('poem')
  //   console.log(data)
  //   // if(data) {
  //   //   poemElm.innerHTML = data
  //   // }else {
  //   //   poemElm.innerHTML = `Sorry, there aren't any poems about ${term}.`
  //   // }
  // });
})()