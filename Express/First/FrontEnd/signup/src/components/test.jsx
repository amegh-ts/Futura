import React from 'react'
import { useSelector } from 'react-redux'


const Test = () => {
    const reduxData=useSelector((state)=>state.user.userInfo)
    console.log('hdsbsjdfvaskbvfdjhkb hskdafn',reduxData);


  return (
    <div>test</div>
  )
}

export default Test