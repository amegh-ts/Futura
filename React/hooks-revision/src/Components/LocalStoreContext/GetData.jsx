import React, { useContext } from 'react'
import { UserContext } from './Context1';


const GetData = () => {
    const {user}=useContext(UserContext)
    console.log(user);
  return (
    <div>GetData</div>
  )
}

export default GetData