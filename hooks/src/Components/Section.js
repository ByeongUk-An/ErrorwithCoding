import React, {useContext} from 'react';
import Header from "./Header";
import {LoginContext} from "./context";

const Section = () => {
    const { useLogIn } = useContext(LoginContext);
    return (
        <>
            <Header />
            <h1>This Changed State</h1>
            <button onClick={useLogIn}>Login</button>
        </>
    )
}

export default Section;