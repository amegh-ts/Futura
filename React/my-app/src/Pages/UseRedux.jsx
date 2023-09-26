import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { loginUser } from '../Redux/UserRedux';

const UseRedux = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState([]);
    async function display() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data);
        setState(res.data)
        dispatch(loginUser(res.data))
    }
    return (
        <div>
            <button onClick={display}>click me</button>
        </div>
    )
}

export default UseRedux