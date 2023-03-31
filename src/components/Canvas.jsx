import React, { useEffect } from 'react'
import Cell from './Cell'
export const Canvas = ({canvas, size, clickCell}) => {
    
    const canva = []

    for (let i=0; i<size; i++) {
        let row = []
        for (let j=0; j<size; j++) {
            row.push(<Cell x={j} y={i} key={j} canvas={canvas} size={size} clickCell={clickCell}/>)
        }
        row = <div className="canva-row" key={i}> {...row} </div>
        canva.push(row)
    }


    
    return (
        <div className='canvas'>
            {canva}
        </div>
    )
}

export default Canvas



