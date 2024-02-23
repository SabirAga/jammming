import { useState } from "react";
import { SearchButton } from "./UI/SearchButton"

export const SearchBar = ({ handleSearch }) => {
    const [search, setSearch] = useState('');
    
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(search);
        }
    };

    return (
        <>
            <div >
                <input
                    type="text"
                    placeholder="Search"
                    className="border-4 border-black rounded-md"
                    onChange={handleSearchChange}
                    value={search}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <SearchButton type='submit' handleClick={() => {
                handleSearch(search)
            }} />
        </>
    )
}