import React from 'react';


const SearchItem = ({image_url, collection_name, slug}) => {
     return (
        <a onMouseDown={(e) => e.preventDefault()} href={`http://localhost:3000/collection/${slug}`} className='search_item_navigation'>
            <img className='search_item_image_navigation' alt='collection' src={image_url}></img>
            <div>
                <h2>{collection_name}</h2>
            </div>
        </a>
    )
}

export default SearchItem;