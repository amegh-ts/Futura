import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Sub from './Sub';

function Api() {
    const [state, setstate] = useState([]);
    useEffect(()=>{
        async function display() {
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
           setstate(res.data) 
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
      <Sub value={state}/>
    </div>
  )
}

export default Api