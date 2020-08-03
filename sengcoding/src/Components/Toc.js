import React from 'react';

class Toc extends React.Component{
    render(){
        let i = 0;
        let lists = [];
        let data = this.props.data;
        for(i=0; i<data.length; i++){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
        }
        return(
            <>
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
            </>
        );
    }
}

export default Toc;