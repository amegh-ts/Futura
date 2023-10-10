
import { useEffect,useReducer } from "react"
import { createContext } from "react"


const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem('user')) || null,
    
}

export const UserContext=createContext(INITIAL_STATE)    //UserContext is a userdefind 

const UserReducer=(state,action)=>{   //UserReducer userdefind
    console.log('action payload',action.payload , 'action type', action.type);

    switch (action.type) {
        case 'Loginsuccess':
            return{user:action.payload}

        default:
            return state
    }
}


export const UserInfoContextProvider=({children})=>{
    const [state,dispatch]=useReducer(UserReducer,INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))   //json.stringify used to converst key value pair to string
    },[state.user])

    return(
        <UserContext.Provider value={{user:state.user,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}
