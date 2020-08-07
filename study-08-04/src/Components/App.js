import React from 'react';
import Toc from "./Toc";
import Subject from "./Subject";
import Control from "./Control";
import ReadContent from "./ReadContent";
import CreateContent from "./CreateContent";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode:'read',
            selected_content_id:2,
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
        const {title,desc} = this.state.welcome
        const {mode} = this.state
        let _title, _desc, _article = null;
        if(this.state.mode === 'welcome') {
            _title = title;
            _desc = desc;
            _article =  <ReadContent title={_title} desc={_desc}/>
        }else if(this.state.mode === 'read') {
            let i =0;
            for(i=0;i<this.state.contents.length; i++){
                let data = this.state.contents[i];
                if(data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
            }
            _article =  <ReadContent title={_title} desc={_desc}/>
        }else if(mode === 'create') {
            _article = <CreateContent onSubmit={function(_title, _desc){
                this.max_content_id = this.max_content_id+1;
              let _contents = this.state.contents.concat(
                   {id:this.max_content_id, title:_title,desc:_desc}
               )
               this.setState({
                   contents:_contents
               })
                console.log(_title,_desc)
            }.bind(this)}/>
        }
    return(
        <>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
            this.setState({mode:'welcome'});
        }.bind(this)} />
        <Toc data={this.state.contents} onChangePage={function(id){
           this.setState({
               mode:'read',
               selected_content_id:Number(id)
           })
        }.bind(this)}/>
        <Control onChangeMode={function(_mode){
            this.setState({
                mode:_mode
            })
        }.bind(this)}/>
            {_article}
        </>
    )
  }
}

export default App;
