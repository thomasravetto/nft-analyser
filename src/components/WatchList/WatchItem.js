import React from "react";

const WatchItem = ({image_url, collection_name, floor_price, owners, slug}) => {
    if (floor_price === 0){
        floor_price = "--";
    }

    if (!owners) {
        owners = 1000
    }
    return (
        <div>
            <a href={`http://localhost:3000/collection/${slug}`} className="watchlist_collection_card">
                <div className="watchlist_item_image_container">
                    <img className= "watchlist_item_image" alt="collection" src={image_url}></img>
                </div>
                <div>
                    <h2 className="watchlist_item_title">{collection_name}</h2>
                    <div  className="watchlist_item_info_container">
                        <div className="watchlist_item_floor_price"><h3>{floor_price} ETH</h3><p>Floor Price</p></div>
                        <div className="watchlist_item_owners"><h3>{owners}</h3><p>Owners</p></div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default WatchItem;