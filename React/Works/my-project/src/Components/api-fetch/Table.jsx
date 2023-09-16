import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./Main.css";

function Table() {
    const [state, setstate] = useState([]);
    // const limit=20;
    useEffect(() => {
        async function display() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(res.data);
            setstate(res.data);
        }
        display();
    }, []);
    console.log("state data", state);
    return (
        <div>
            <div className='t_main'>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>username</th>
                        <th>Email</th>
                    </tr>
                    {state.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    )
}

export default Table