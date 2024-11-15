import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

{/* function search passes onsearch as a prop and is called when a user submits a search*/}
function Search ({onSearch}) {
{/*state query variable is used to keep track of the current search input from the user*/}
    const [query, setQuery] = useState('');
{/* navigate functions used usenavigate when a search is submitted and routed to the search*/}
    const navigate = useNavigate();
{/*Updates query state depending on user unput in the search bar*/}
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
{/*function is triggered once the form is submitted*/}
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
{/*uses navigate to change the URL to /search/input */}
        navigate(`/search/${query}`);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
        <input
        type="search"
        name="search"
        placeholder="Search"
        required
        value={query}
        onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
    )
}

{/*Onsearch must be function and is required for component to work*/}
Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
export default Search
