import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { UserContext } from './Context1';

const Dispatch1 = () => {
    const [state, setState] = useState([]);
    const { user,dispatch } = useContext(UserContext);

    useEffect(() => {
        async function display() {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                console.log('****', res.data);
                setState(res.data);

                dispatch({ type: 'Loginsuccess', payload: res.data });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        display();
        console.log('state data', state);
    }, []);
    const Clear=()=>{
        dispatch({type:'Remove'})
    }

    // const Clear = () => {
    //     // localStorage.setItem('user','')
    //     localStorage.setItem('user',null)
    // }

    return (
        <div>
            Dispatch1
            <div>
                <button onClick={Clear}>clear</button>
            </div>
        </div>
    );
}

export default Dispatch1;
