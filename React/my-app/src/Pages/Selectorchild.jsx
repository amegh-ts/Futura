import React from 'react'
import { useSelector } from 'react-redux'

const Selectorchild = () => {
    const reduxData=useSelector((state)=>state.user.userInfo)
    console.log('ameg ....',reduxData);
  return (
    <div>Selectorchild</div>
  )
}

export default Selectorchild