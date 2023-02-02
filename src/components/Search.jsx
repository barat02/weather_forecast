import React from 'react';
import './Search.css'
import search from '../assets/search.svg'
function Search(props) {
    return (
        <div>
            <input type="text" placeholder='e.g. New-York, Dublin'/> 
        </div>
    );
}

export default Search;