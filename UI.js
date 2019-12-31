const width = window.innerWidth
const height = window.innerHeight
const canvas = document.getElementById('canvas')
canvas.setAttribute('width', width)
canvas.setAttribute('height', height)

const ctx = canvas.getContext('2d')
// ctx.scale(width, height)

// dev frame
ctx.scale(width / 3, height / 3)
ctx.translate(1, 1)

var play = true
const osc = new OscillatorSet(4)

window.requestAnimationFrame(animate)

window.addEventListener('keydown', e => {
  console.log(e.keyCode)
  switch (e.keyCode) {
    // space
    // play - pause
    case 32:
      play = !play
      window.requestAnimationFrame(animate)
      break
  }
})

function animate (time) {
  osc.next()
  render()
  if (play) window.requestAnimationFrame(animate)
}

function render () {
  ctx.clearRect(0, 0, 1, 1)
  osc.pos.forEach((pos, i) => {
    ctx.beginPath()
    ctx.ellipse(
      ((pos + 1) / 2 + i) / osc.size, 0.5,
      0.1, 0.1,
      0,
      0, Math.PI * 2
    )
    ctx.closePath()
    ctx.fill()
  })
}
