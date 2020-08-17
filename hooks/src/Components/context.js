import React, {createContext ,useState} from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
    const [login, setLogin] = useState({
        name: "병욱",
        loggedIn: false
    })

    const useLogIn = () => setLogin({...login, loggedIn: true});
    return (
        <LoginContext.Provider value={{login, useLogIn}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;