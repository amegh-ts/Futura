import React from 'react'

function Child({valuess,valuer}) {
  return (
    <div>
        <h1 style={{backgroundColor:'red'}}>{valuess}</h1>
        <h2>{valuer}</h2>
    </div>
  )
}

export default Child