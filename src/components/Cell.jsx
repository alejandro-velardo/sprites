import React from 'react'

export const Cell = ({x, y, size, canvas, clickCell}) => {

    const position = Number(y) * Number(size) + Number(x);
    const color = canvas[position];

  return (
    <div className='square' style={{backgroundColor: color}} onClick={() => clickCell(x, y)}>
        
    </div>
  )
}

export default Cell