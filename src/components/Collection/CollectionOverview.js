import React from "react";
import CollectionItem from "./CollectionItem";
import CollectionInfo from "./CollectionInfo";

const CollectionOverview = ({collection_info, collection_items, addCollectionToWatchlist}) => {

    if (!collection_info || collection_info.length === 0) {
        throw Error("An Error Occurred")
    }

    return (
        <div>
            <CollectionInfo collection_info={collection_info} addCollectionToWatchlist={addCollectionToWatchlist}/>
            <div className="collection_overview_container">
                {
                    collection_items.map((item, i) => {
                        return (
                            <CollectionItem
                            key={collection_items[i].id}
                            id={collection_items[i].id}
                            image_url={collection_items[i].image_url}
                            title={collection_items[i].title}
                            collection_address={collection_info.collection_address}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionOverview;