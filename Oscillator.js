const OscillatorSet = function (size) {
  this.phi = new Array(size).fill(0)
    .map(z => Math.random() * 2 * Math.PI)
  this.time = 0
  this.size = size
}

OscillatorSet.prototype = {
  get pos () {
    return this.phi.map(p => ({
      x: Math.sin(this.time / 10 + p),
      y: Math.cos(this.time / 10 + p)
    }))
  },
  get com () {
    return this.pos.reduce((sum, next, idx) => sum + idx + next, 0) / this.size
  }
}

OscillatorSet.prototype.next = function () {
  this.phi = this.phi.map(p => {
    return p + 0.01 * this.phi.reduce(
      (sum, next) => sum + Math.sin(next - p),
      0
    ) / this.size
  })
  this.time += 1
}

OscillatorSet.prototype.random = function () {
  this.phi = this.phi.map(p => Math.random() * 2 * Math.PI)
}
