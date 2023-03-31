import { useState } from 'react'
import Canvas from './components/Canvas.jsx'
import './App.css'

function App() {
  const size = 31
  const [color, setColor] = useState("#FFFFFF")

  const canvasColorTable = (size) => {
    let tbl = []

    for (let i=0; i<size*size; i++) {
      tbl.push(color)
    }

    return tbl
  }

  const [canvas, setCanvas] = useState(canvasColorTable(size))

  const clickCell = (x, y) => {
    const position = Number(y) * Number(size) + Number(x)
    canvas[position] = color
    setCanvas([...canvas])
  }

  const clean = () => {
    const updCanvas = canvas.map(cell => cell=color)
    setCanvas(updCanvas)
  }

  return (
    <div className="container">
      <h1>
        Sprites!
      </h1> 
      <div className='commands'>
        <input type="color" value={color} onInput={(e) => setColor(e.target.value)}/>
        <button id="clean-button" onClick={() => clean()}> Clean </button>
      </div>
        
      <Canvas 
        size={size} 
        clickCell={clickCell}
        canvas={canvas}
      />

    </div>
  )
}

export default App
