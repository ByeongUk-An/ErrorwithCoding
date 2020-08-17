import React from 'react';
import Section from "./Section";
import LoginContextProvider from "./context";


function App() {
    return (
    <LoginContextProvider>
        <Section />
    </LoginContextProvider>
    )
}
export default App;
