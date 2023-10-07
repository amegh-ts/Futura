import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE = {
    User: null,
}

export const UserContext = createContext(INITIAL_STATE)
const UserReducer = (state, action) => {
    console.log('action payload', action.payload, ' action type', action.type);
  
    switch (action.type) {
      case 'LoginStart':
        return { ...state, User: null };
      case 'LoginSuccess':
        return { ...state, User: action.payload }; // Assuming payload contains user data
      case 'LoginFailure':
        return { ...state, User: null };
      case 'Logout':
        return { ...state, User: null };
      default:
        return state;
    }
  };
  
  export const UserInfoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  
    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(state.User)); // Use state.User, not state.user
    }, [state.User]);
  
    return (
      <UserContext.Provider value={{ user: state.User, dispatch }}>
        {children}
      </UserContext.Provider>
    );
  };
  