const width = window.innerWidth
const height = window.innerHeight
const canvas = document.getElementById('canvas')
canvas.setAttribute('width', width)
canvas.setAttribute('height', height)

const ctx = canvas.getContext('2d')
ctx.scale(width, height)

// dev frame
// ctx.scale(width / 3, height / 3)
// ctx.translate(1, 1)

var settings = {
  play: true,
  size: 400
}

var osc = new OscillatorSet(400)

window.requestAnimationFrame(animate)

window.addEventListener('keydown', e => {
  console.log(e.keyCode)
  switch (e.keyCode) {
    // space
    // play - pause
    case 32:
      settings.play = !settings.play
      window.requestAnimationFrame(animate)
      break

    // down arrow
    // size down
    case 38:
      settings.size = Math.max(3, settings.size - 1)
      break

    // up arrow
    // size up
    case 40:
      settings.size = Math.min(400, settings.size + 1)
      osc = new OscillatorSet(settings.size)
      break

    // r key
    // reset to random
    case 82:
      osc.random()
      break
  }
})

function animate (time) {
  osc.next()
  render()
  if (settings.play) window.requestAnimationFrame(animate)
}

function render () {
  ctx.clearRect(0, 0, 1, 1)
  osc.pos.forEach((pos, i) => {
    ctx.beginPath()
    ctx.ellipse(
      i / (settings.size - 1), (pos.y + 1) / 5 + 0.3,
      0.005, 0.005,
      0,
      0, Math.PI * 2
    )
    ctx.closePath()
    ctx.fill()
  })

  // osc.phi.forEach((phi, i) => {
  //   ctx.beginPath()
  //   ctx.ellipse(
  //     i / (settings.size - 1), phi / (Math.PI * 2),
  //     0.005, 0.005,
  //     0,
  //     0, Math.PI * 2
  //   )
  //   ctx.closePath()
  //   ctx.fill()
  // })
}
