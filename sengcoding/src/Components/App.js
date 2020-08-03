import React from 'react';
import Toc from "./Toc";
import Subject from "./Subject";
import Content from "./Content";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'read',
            subject:{title:'Web', sub:'world wide web!'},
            welcome:{title:'welcome',desc:'hello react!'},
            contents:[
                {id:1,title:'HTML',desc:'HTML is for information'},
                {id:2,title:'CSS',desc:'CSS is for design'},
                {id:3,title:'JavaScript',desc:'JavaScript is for interactive'}
            ]
        }
    }
  render(){
        let _title, _desc = null;
        if(this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }else if(this.state.mode === 'read') {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
    return(
        <>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
            this.setState({mode:'welcome'});
        }.bind(this)} />
        <Toc data={this.state.contents}/>
        <Content title={_title} desc={_desc}/>
        </>
    )
  }
}

export default App;
