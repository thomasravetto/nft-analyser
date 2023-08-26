import React from "react";

const SearchInput = ({searchChange, toggleCollectionsOptions}) => {
    return (
        <div className="search_input_navigation">
            <input className="input_element_navigation" type="search" placeholder="Search Collection" onChange={searchChange} onFocus={toggleCollectionsOptions} onBlur={toggleCollectionsOptions}></input>
        </div>
    )
}

export default SearchInput;