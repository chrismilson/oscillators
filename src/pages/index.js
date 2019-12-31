import React from 'react'
import Page from '../components/Page'
import Menu from '../components/Menu'

import '../style.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      oscillator: ''
    }
  }

  componentDidMount () {
    this.initCanvas()
  }

  componentDidUpdate () {
    this.redrawCanvas()
  }

  initCanvas () {
    const ctx = this.refs.canvas.getContext('2d')
    ctx.scale(window.innerWidth, window.innerHeight)
    this.setState({ ctx })
  }

  redrawCanvas () {
    this.state.ctx.clearRect(0, 0, 1, 1)
    const max = 5
    for (var i = 0; i < max; i++) {
      this.state.ctx.fillRect(i / max, 0, 1 / (2 * max), 0.1)
    }
  }

  handleKey (e) {
    console.log(e)
  }

  render () {
    return (
      <Page className='App'>
        <Menu />
        <canvas
          ref='canvas'
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </Page>
    )
  }
}

export default App
