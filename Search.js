import React from "react";
//import PropTypes from 'prop-types';

const Search = ({children, onInputChange, searchKey}) => {
    return(
        <>
        {children}
        <input type="text" value={searchKey} placeholder="Search here: " onChange={e => onInputChange(e.target.value)} />
        </>
    )
}
// Search.propTypes = {
//     children: PropTypes.node,
//     onInputChange: PropTypes.func,
//     searchKey: PropTypes.func

// }
export default Search;