
import "./SearchBar.css"
import React, {useState} from 'react'
const SearchBar = (props) => {
    const [searchRequest, setSearchRequest] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(searchRequest)
        props.getSearchResults(searchRequest);
        setSearchRequest('');
    }



    return (  
        <div className='search-contain'>
            <form className='search-form-contain' onSubmit={handleSubmit}>
                <label className='search-label'>Search:</label>
                <input type='text' placeholder="Look for a video!" className='search-input' value={searchRequest} onChange ={(event) => setSearchRequest(event.target.value)} />
                <button className='search-button'>Search</button>
            </form>
        </div>
    );
}
 
export default SearchBar;