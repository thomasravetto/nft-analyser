import React, {useState, useEffect} from "react";
import internet_logo from "../../static/internet.png"
import eth_logo from "../../static/ethereum.png"
import CollectionItem from "./CollectionItem";

const CollectionOverview = ({collection_info, collection_items, addCollectionToWatchlist, fetchCollection, removeCollectionFromWatchlist, isCollectionInWatchlist, start_token}) => {
    const {image_url,
    collection_name,
    collection_address,
    collection_slug,
    description,
    external_url,
    floor_price,
    owners,
    total_supply} = collection_info

    const parts = description.split(/\[([^\]]+)\]\(([^)]+)\)/g);

    let [collectionInWatchlist, setCollectionInWatchlist] = useState();

    useEffect(() => {
        isCollectionInWatchlist(collection_address)
          .then(response => {
              setCollectionInWatchlist(response);
          })
          .catch(error => {
            console.error("Error checking collection in watchlist:", error);
          });
      }, [collection_address, isCollectionInWatchlist]);

    // Create JSX elements from the parts
    const transformedText = parts.map((part, index) => {
        if (index % 3 === 0) {
            return part; // Regular text
        } else if (index % 3 === 1) {
            const linkUrl = parts[index + 1]; // URL is next to link text
            return <a key={index} href={linkUrl} target="_blank" rel="noreferrer">{part}</a>;
        } else {
            return null;
        }
    });

    if (!collection_info || collection_info.length === 0) {
        throw Error("An Error Occurred")
    }

    return (
        <div>
            <div className="collection_info_container">
                <div className="top_portion">
                    <div>
                        <img className="collection_info_image" alt="nft" src={image_url}></img>
                        <h3 className="collection_info_name">{collection_name}</h3>
                    </div>
                        <div class="content_links">
                            <div className="collection_info_links">
                                <a href={external_url} target="_blank" rel="noreferrer"><img className="internet_logo" src={internet_logo} alt="website"></img></a>
                                <a href={`https://etherscan.io/address/${collection_address}`} target="_blank" rel="noreferrer"><img className="eth_logo" src={eth_logo} alt="address"></img></a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_portion">
                        <div className="description">
                            <p className="collection_info_description">{transformedText}</p>
                        </div>
                    <div className="info_metadata">
                        <div className=" metadata"><h4 className="collection_info_floor_price metadata_content">{floor_price === 0 ? "--" : floor_price} ETH</h4><p className="metadata_content">Floor Price</p></div>
                        <div className=" metadata"><h4 className="collection_info_owners metadata_content">{owners === 0 ? "--" : owners}</h4><p className="metadata_content">Owners</p></div>
                        <div className=" metadata"><h3 className="collection_info_supply metadata_content">{total_supply}</h3><p className="metadata_content">Items</p></div>
                        {collectionInWatchlist
                        ? <button className="remove_from_watchlist" onClick={() => {removeCollectionFromWatchlist(collection_address); setCollectionInWatchlist(false)}}>Remove from WatchList</button>
                        : <button className="add_to_watchlist" onClick={() => {addCollectionToWatchlist(collection_address); setCollectionInWatchlist(true)}}>Add To WatchList</button>
                        }
                    </div>
                </div>
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
            <button onClick={() => {fetchCollection(collection_slug, start_token)}}>Load More</button>
        </div>
    )
}

export default CollectionOverview;