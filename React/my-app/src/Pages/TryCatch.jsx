import React, { useEffect, useState} from 'react'
import axios from 'axios'

function TryCatch() {
    const [state, setstate] = useState([]);
    useEffect(()=>{
        async function display() {
          try{
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            setstate(res.data) 
          }catch(err){
            console.log(err);
            console.log('api error');
          }finally{
            console.log('finally worked');
          }    
        }
        display()
    },[])
    console.log('State data',state);
  return (
    <div>
        <h1>User</h1>
        <ul>
        {state.map((user) => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>City: {user.address.city}</div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TryCatch