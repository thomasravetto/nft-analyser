import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionOverview = ({collection_info, collection_items, addCollectionToWatchlist}) => {
    const {image_url,
    collection_name,
    collection_address,
    description,
    external_url,
    floor_price,
    total_supply} = collection_info

    if (!collection_info || collection_info.length === 0) {
        throw Error("An Error Occurred")
    }

    return (
        <div>
            <div className="collection_info_container">
                <img className="collection_info_image" alt="nft" src={image_url}></img>
                <h2 className="collection_info_name">{collection_name}</h2>
                <p className="collection_info_">Items: {total_supply}</p>
                <p className="collection_info_">{description}</p>
                <h4 className="collection_info_">Floor Price: {floor_price === 0 ? "--" : floor_price} ETH</h4>
                <div className="collection_info_links">
                    <p>Collection Address: {collection_address}</p>
                    <a href={external_url}>Website</a>
                </div>
                <button onClick={() => addCollectionToWatchlist(collection_address)}>Add To WatchList</button>
            </div>
            <div className="collection_overview_container">
                {
                    collection_items.map((item, i) => {
                        return (
                            <CollectionItem
                            key={collection_items[i].id}
                            id={collection_items[i].id}
                            image_url={collection_items[i].image_url}
                            title={collection_items[i].title}
                            collection_address={collection_address}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionOverview;