(function() {
  
  const term = location.pathname.split('/').filter(a => a !== "")[0]
  fetch(`/.netlify/functions/poemapi?term=${term.trim()}`)
  .then(response => {
    return response.json()
  })
  .then(data => {    
    console.log(`%c response`,'color: orange; font-size: 32px')
    console.log(data)
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