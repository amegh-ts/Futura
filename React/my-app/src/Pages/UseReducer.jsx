import React, { useReducer } from 'react'
import { Link } from 'react-router-dom';

function UseReducer() {

    const InitialState = 0
    const reducer = (state, action) => {
        console.log('action', action, 'state', state);
        console.log(action);
        // switch (action.type) {
        //     case 'increase':
        //         return state = state + 1
        //     case 'decrease':
        //         return state = state > 0 ? state - 1 : 0
        //     case 'increment2':
        //         return state = state + 2
        //     case 'decrement2':
        //         return state = state >= 2 ? state - 2 : 0
        //     case 'reset':
        //         return InitialState;
        //     default:
        //         return state
        // }

        // using if else
        if (action.type === 'increase') {
            return state + 1;
        } else if (action.type === 'decrease') {
            return state > 0 ? state - 1 : 0;
        } else if (action.type === 'increment2') {
            return state + 2;
        } else if (action.type === 'decrement2') {
            return state >= 2 ? state - 2 : 0;
        } else if (action.type === 'reset') {
            return InitialState;
        } else {
            return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, InitialState)

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: 'increase' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>decrease</button>
            <button onClick={() => dispatch({ type: 'increment2' })}>increment2</button>
            <button onClick={() => dispatch({ type: 'decrement2' })}>decrement2</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            {/* <Link to={'Sample'}><h1>heeeeee</h1></Link> */}
        </div>
    )
}

export default UseReducer