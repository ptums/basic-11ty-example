(function() {
  
  const term = location.pathname.split('/').filter(a => a !== "")[0]
  console.log(`%c term: ${term}`, 'color: green; font-size: 22px;')
  console.log('^^ is this formatted properly')
  console.log(`%c request url: /.netlify/functions/poemapi?term=${term.trim()}`,  'color: red; font-size: 32px;')
  fetch(`/.netlify/functions/poemapi?term=${term.trim()}`)
  .then(response => response)
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