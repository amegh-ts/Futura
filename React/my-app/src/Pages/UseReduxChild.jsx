import React from 'react'
import { useSelector } from 'react-redux'

const UseReduxChild = () => {
    const reduxData=useSelector((state)=>state.users.userInfo)

    console.log('blabla',reduxData[0]);
  return (
    <div>
        {reduxData[0] && reduxData[0].map((li)=>(
            <h1>Welcome{li.id}</h1>
        ))}
    </div>
  )
}

export default UseReduxChild