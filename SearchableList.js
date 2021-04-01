import React from 'react';
import Search from './Search';
import SearchList from './SearchList';
import  './SearchList.css';

class SearchableList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchWord: "",
            newSearchList : [],
            searchList : [
                "Apple", "Banana", "PineApple", "Orange"
            ]
        }
    }
    handleInputChange = value => {
        const {searchWord, searchList} = this.state;
        const list = searchList.filter(item => {
            return item.startsWith(value)
        })
        this.setState({searchWord: value}, () => {
            this.setState({newSearchList: list});
        } 
            );
    }
    render() {
        const {searchWord, newSearchList} = this.state;
        return (
            <div className="listWrapper">
            <h1 className="heading">Search Engine</h1>
            <Search searchKey={searchWord} onInputChange={this.handleInputChange}>Search your Word: </Search>
            {this.state.searchWord ? <SearchList list={newSearchList} /> : null}
        </div>
        )
    }
   
}

export default SearchableList;
