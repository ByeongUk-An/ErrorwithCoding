import React from 'react';
import SearchPresenter from "./SearchPresenter";
import getMovieApi from "../../api";

export default class extends React.Component {
    state = {
        searchResult: null,
        searchTerm: '',
        error: null,
        loading: false
    }

    controllSubmit = () => {
        const {searchTerm} = this.state;
        if(searchTerm !== "") {
            this.useTermSearch();
        }
    }

    useTermSearch = async () => {
       const {searchTerm} = this.state;
       this.setState({
           loading: true
       });
       try {
           const {data:{results:searchResult}} = await getMovieApi.search(searchTerm);
           this.setState({
               searchResult
           })
       }catch {
           this.setState({
               error: '검색 결과가 없습니다.'
           })
       }
       finally {
           this.setState({
               loading: false
           })
       }
    }

    render() {
        const {searchResult,searchTerm,error,loading} = this.state;
        return(
            <SearchPresenter searchResult={searchResult} searchTerm={searchTerm} error={error} loading={loading} controllSubmit={this.controllSubmit}/>
        )
    }
}