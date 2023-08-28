import React from "react";

const CollectionInfo = ({ collection_info, addCollectionToWatchlist }) => {
    const {image_url,
        collection_name,
        collection_address,
        description,
        external_url,
        floor_price,
        owners,
        total_supply} = collection_info

    return (
        <div className="collection_info_container">
                <img className="collection_info_image" alt="nft" src={image_url}></img>
                <h2 className="collection_info_name">{collection_name}</h2>
                <p className="collection_info_">Items: {total_supply}</p>
                <p className="collection_info_">{description}</p>
                <h4 className="collection_info_">Floor Price: {floor_price === 0 ? "--" : floor_price} ETH</h4>
                <h4 className="collection_info_">Owners: {owners === 0 ? "--" : owners}</h4>
                <div className="collection_info_links">
                    <p>Collection Address: {collection_address}</p>
                    <a href={external_url}>Website</a>
                </div>
                <button onClick={() => addCollectionToWatchlist(collection_address)}>Add To WatchList</button>
            </div>
    )
}

export default CollectionInfo;