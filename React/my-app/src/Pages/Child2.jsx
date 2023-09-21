import React from 'react'

const Child2 = (props) => {
    console.log('Child rendered')
  return (
    <div>
        <h1>React two : state :{props.value}</h1>
        
    </div>
  )
}
export const MemoChild=React.memo(Child2)
