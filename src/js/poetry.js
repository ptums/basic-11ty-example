(function() {
  
  const term = location.pathname.split('/').filter(a => a !== "")[0]
  console.log(`%c term: ${term}`, 'color: green; font-size: 22px;')
  console.log('^^ is this formatted properly')
  fetch(`/.netlify/functions/poemapi?term=${term}`)
  .then(response => response.json())
  .then(data => {
    const poemElm = document.getElementById('poem')
    console.log(data)
    // if(data) {
    //   poemElm.innerHTML = data
    // }else {
    //   poemElm.innerHTML = `Sorry, there aren't any poems about ${term}.`
    // }
  });
})()