import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";

function Main() {
    const [state, setstate] = useState([]);
    // const limit=20;
    useEffect(() => {
        async function display() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
            console.log(res.data);
            setstate(res.data);
        }
        display();
    }, []);


    const datas = state.filter((li) => {
        return li.id <= 10
    })

    console.log('*******', datas);

    console.log("state data", state);
    return (
        <div className="body">
            <div className="allcards">
                {datas.map((user) => (
                    <div className="cards" key={user.Id}>
                        <h4>{user.id}</h4>
                        <div className="image">
                            <div><a href={user.url}><img src={user.thumbnailUrl} alt="" /></a></div>
                        </div>
                        <div className="headerr">
                            <h2>{user.title}</h2>
                        </div>
                        <div className="button">
                            <button onClick={() => window.open(user.url)}>click</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
