const vibes = [
  "my sunshines",
  "my family",
  "my joy",
  "my loves",
  "my life",
  "my light"
]

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

document.querySelector('.vibe').append(vibe);