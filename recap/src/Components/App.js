import React from 'react';
import Globalstyle from "../Styles/Globalstyle";
import Container from "./Container";
import Header from "./Header";
import List from "./List";

function App(){

    return(
        <>
            <Globalstyle />
            <Container>
                <Header/>
                <List/>
            </Container>
        </>
    );

}

export default App;
