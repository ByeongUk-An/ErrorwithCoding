import React, {useContext} from 'react';
import {LoginContext} from './context';

const Header = () => {
    const {login: {name, loggedIn}} = useContext(LoginContext);

    return (
        <header>
            <a href="/">MAIN</a> 안녕하세요 {name}님 {" "}
            {loggedIn ? "로그인되었습니다." : "아닙니다 나가주세요."}
        </header>
    )
}

export default Header;