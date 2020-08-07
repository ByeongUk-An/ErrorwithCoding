import React from 'react';

class Enter1 extends React.Component {
    state = {
        text:'',
    }
    ent = (e) => {
        const {name, value} = e.target;
        const proinput = {
            ...this.state,
            [name]: value
        };
        if(e.keyCode === 13) {
           this.setState(proinput);
        }
    }

    render(){
        const {text} = this.state;
        return(
            <>
                <input type="text" onKeyDown={this.ent} name='text' value={text}   />
                <h2>이벤트: </h2>
            </>
        )
    }
}

export default Enter1;