import React, { useState } from 'react'
import axios from 'axios'

const UseRedux = () => {
    const [state, setState] = useState([]);
    async function display() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data);
        setState(res.data)
    }
    return (
        <div>
            <button onClick={display}>click me</button>
        </div>
    )
}

export default UseRedux