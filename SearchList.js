import React from 'react';
//import PropTypes from 'prop-types';
import './SearchList.css';


const SearchList = ({list}) => {
      return(
          <ul className='list'>
          {
              list.map(item => {
                  return(
                      <li>{item}</li>
                  )
              })
          }
          </ul>
      )
}
// SearchList.propTypes = {
//     list: Proptypes.array,
// }
export default SearchList;