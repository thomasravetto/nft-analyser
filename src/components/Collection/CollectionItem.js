import React from "react";

const CollectionItem = ({id, image_url, title, collection_address}) => {
    return (
        <a className="collection_item_href" href={`http://localhost:3000/${collection_address}/${id}`}>
            <div className="collection_item_container">
                <div className="collection_item_image_container">
                    <img className="collection_item_image" alt="item" src={image_url}></img>
                </div>
                <div>
                    <h4 className="collection_item_title">{title}</h4>
                </div>
            </div>
        </a>
    )
}

export default CollectionItem;