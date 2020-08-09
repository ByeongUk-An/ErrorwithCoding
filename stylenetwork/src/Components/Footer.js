import React from "react";



function Footer() {
    const styles = {
        width: "100%",
        height:'50px',
        background: '#03a9f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
    <footer style={styles}>
        &copy; Byeonguk 2020 All right reserved.
    </footer>
    )
};

export default Footer;