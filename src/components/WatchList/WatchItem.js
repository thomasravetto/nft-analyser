import React from "react";

const WatchItem = ({image_url, collection_name, floor_price, owners, slug}) => {
    if (floor_price === 0){
        floor_price = "--";
    }
    return (
        <a href={`http://localhost:3000/collection/${slug}`} className="collection_card">
            <div className="image_and_name_card">
                <img className= "collection_card_image" alt="collection" src={image_url}></img>
                <h2>{collection_name}</h2>
            </div>
            <div className="floor_price_and_owners_card">
                <p>Floor Price: <b>{floor_price} ETH</b></p>
                <p>Owners: <b>{owners}</b></p>
            </div>
        </a>
    )
}

export default WatchItem;