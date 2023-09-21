import React from 'react'

function Child({valuess,valuer,props}) {
  console.log('Child rendered')
  return (
    <div>
        <h1 style={{backgroundColor:'red'}}>{valuess}</h1>
        <h2>{valuer}</h2>
        <h1>React two : state :{props.value}</h1>
    </div>
  )
}

export default Child
export const MemoChild=React.memo(Child)